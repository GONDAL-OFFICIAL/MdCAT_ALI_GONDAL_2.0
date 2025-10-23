import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { QuizState, QuizContextType, Question, QuizAttempt } from '../types';
import { users, subjects, chapters } from '../data/index';
import { mcqs } from '../data/mcqs';

export const QuizContext = createContext<QuizContextType>({} as QuizContextType);

// This is the true initial state for a fresh session
const defaultInitialState: QuizState = {
  user: null,
  subjects,
  chapters,
  mcqs,
  currentSubject: null,
  currentChapter: null,
  quizQuestions: [],
  quizAttempts: [],
  startTime: null,
  endTime: null,
  quizDuration: null,
  timePerQuestion: null,
  bookmarkedQuestions: [],
};

// This function runs once to rehydrate state from sessionStorage
const getInitialState = (): QuizState => {
  try {
    const savedStateJSON = sessionStorage.getItem('quizDynamicState');
    if (savedStateJSON) {
      const savedDynamicState = JSON.parse(savedStateJSON);
      
      // If a quiz was in progress (questions exist but it's not finished), restart it on reload.
      const quizWasInProgress = savedDynamicState.quizQuestions && savedDynamicState.quizQuestions.length > 0 && !savedDynamicState.endTime;

      if (quizWasInProgress) {
        // Reset progress but keep the same set of questions
        const restartedQuizState = {
          ...savedDynamicState,
          quizAttempts: [], // Reset attempts
          startTime: Date.now(), // Reset start time to now
          endTime: null, // Ensure end time is null
        };
        // Re-combine with static data and return the modified state
        return { ...defaultInitialState, ...restartedQuizState };
      }
      
      // If no quiz was in progress, load the saved state as is
      return { ...defaultInitialState, ...savedDynamicState };
    }
  } catch (error) {
    console.error("Could not parse saved state:", error);
  }
  // Return the absolute default if nothing is saved or an error occurs
  return defaultInitialState;
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>(getInitialState);

  // This effect persists the dynamic parts of the state to sessionStorage on every change
  useEffect(() => {
    const { subjects, chapters, mcqs, ...dynamicState } = state;
    sessionStorage.setItem('quizDynamicState', JSON.stringify(dynamicState));
  }, [state]);

  const login = useCallback((username: string, password: string) => {
    const userExists = users.find(
      u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );
    if (userExists) {
      setState(prevState => ({ ...prevState, user: { username: userExists.username } }));
    } else {
      alert("Invalid username or password!");
    }
  }, []);
  
  const logout = useCallback(() => {
    sessionStorage.removeItem('quizDynamicState');
    setState(defaultInitialState);
  }, []);

  const selectSubject = useCallback((subject: string) => {
    setState(prevState => ({ ...prevState, currentSubject: subject }));
  }, []);

  const selectChapter = useCallback((chapter: string) => {
    setState(prevState => ({ ...prevState, currentChapter: chapter }));
  }, []);

  const startQuiz = useCallback((questions: Question[], timePerQuestion: number) => {
    setState(prevState => ({
      ...prevState,
      quizQuestions: questions,
      quizAttempts: [],
      startTime: Date.now(),
      endTime: null,
      quizDuration: questions.length * timePerQuestion,
      timePerQuestion: timePerQuestion,
      bookmarkedQuestions: [], // Clear bookmarks for a new test
    }));
  }, []);
  
  const submitAnswer = useCallback((question: Question, userAnswer: string, forceIncorrect = false) => {
    // If forceIncorrect is true, the answer is wrong regardless. Otherwise, check normally.
    const isCorrect = forceIncorrect ? false : question.correctAnswer === userAnswer;
    const attempt: QuizAttempt = { question, userAnswer, isCorrect };
    setState(prevState => ({
      ...prevState,
      quizAttempts: [...prevState.quizAttempts, attempt],
    }));
  }, []);

  const finishQuiz = useCallback(() => {
    setState(prevState => {
      if (prevState.endTime) return prevState;
      return { ...prevState, endTime: Date.now() };
    });
  }, []);
  
  const resetQuiz = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      currentSubject: null,
      currentChapter: null,
      quizQuestions: [],
      quizAttempts: [],
      startTime: null,
      endTime: null,
      quizDuration: null,
      timePerQuestion: null,
    }));
  }, []);
  
  const startNewTest = useCallback(() => {
    setState(prevState => ({
        ...defaultInitialState, // Reset to the absolute default
        user: prevState.user, // But keep the user logged in
    }));
  }, [])

  const startRetake = useCallback(() => {
    setState(prevState => {
      const questionsToRetake = prevState.quizAttempts
        .filter(attempt => !attempt.isCorrect)
        .map(attempt => attempt.question);
      
      if (questionsToRetake.length > 0) {
        return {
            ...prevState,
            quizQuestions: questionsToRetake,
            quizAttempts: [],
            startTime: Date.now(),
            endTime: null,
            quizDuration: questionsToRetake.length * (prevState.timePerQuestion || 60),
        };
      }
      return prevState;
    });
  }, []);

  const retakeFullQuiz = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      quizAttempts: [],
      startTime: Date.now(),
      endTime: null,
      quizDuration: prevState.quizQuestions.length * (prevState.timePerQuestion || 60),
    }));
  }, []);

  const toggleBookmark = useCallback((question: Question) => {
    setState(prevState => {
      const isBookmarked = prevState.bookmarkedQuestions.some(
        q => q.question === question.question
      );
      if (isBookmarked) {
        return {
          ...prevState,
          bookmarkedQuestions: prevState.bookmarkedQuestions.filter(
            q => q.question !== question.question
          ),
        };
      } else {
        return {
          ...prevState,
          bookmarkedQuestions: [...prevState.bookmarkedQuestions, question],
        };
      }
    });
  }, []);

  const startBookmarkedQuiz = useCallback(() => {
    setState(prevState => {
      if (prevState.bookmarkedQuestions.length > 0) {
        const shuffled = [...prevState.bookmarkedQuestions].sort(() => 0.5 - Math.random());
        return {
          ...prevState,
          quizQuestions: shuffled,
          quizAttempts: [],
          startTime: Date.now(),
          endTime: null,
          quizDuration: shuffled.length * (prevState.timePerQuestion || 60),
        };
      }
      return prevState;
    });
  }, []);

  const startWrongAndBookmarkedQuiz = useCallback(() => {
      setState(prevState => {
          const incorrectQuestions = prevState.quizAttempts
              .filter(attempt => !attempt.isCorrect)
              .map(attempt => attempt.question);
          
          const combined = [...incorrectQuestions, ...prevState.bookmarkedQuestions];
          
          const uniqueQuestions = Array.from(new Set(combined.map(q => q.question)))
              .map(questionText => combined.find(q => q.question === questionText)!);
          
          if (uniqueQuestions.length > 0) {
              const shuffled = uniqueQuestions.sort(() => 0.5 - Math.random());
              return {
                  ...prevState,
                  quizQuestions: shuffled,
                  quizAttempts: [],
                  startTime: Date.now(),
                  endTime: null,
                  quizDuration: shuffled.length * (prevState.timePerQuestion || 60),
              };
          }
          return prevState;
      });
  }, []);

  return (
    <QuizContext.Provider value={{
      ...state,
      login,
      logout,
      selectSubject,
      selectChapter,
      startQuiz,
      submitAnswer,
      finishQuiz,
      resetQuiz,
      startNewTest,
      startRetake,
      retakeFullQuiz,
      toggleBookmark,
      startBookmarkedQuiz,
      startWrongAndBookmarkedQuiz,
    }}>
      {children}
    </QuizContext.Provider>
  );
};