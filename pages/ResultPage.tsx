
import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { QuizState, QuizContextType, User, Question, QuizAttempt } from '../types';
// Fix: Explicitly import from '../data/index' to avoid resolving to the empty 'data.ts' file.
import { users, subjects, chapters, TIME_PER_QUESTION } from '../data/index';
import { mcqs } from '../data/mcqs';

export const QuizContext = createContext<QuizContextType>({} as QuizContextType);

const initialState: QuizState = {
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
  bookmarkedQuestions: [],
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>(initialState);

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

  const selectSubject = useCallback((subject: string) => {
    setState(prevState => ({ ...prevState, currentSubject: subject }));
  }, []);

  const selectChapter = useCallback((chapter: string) => {
    setState(prevState => ({ ...prevState, currentChapter: chapter }));
  }, []);

  const startQuiz = useCallback((questions: Question[]) => {
    setState(prevState => ({
      ...prevState,
      quizQuestions: questions,
      quizAttempts: [],
      startTime: Date.now(),
      endTime: null,
      quizDuration: questions.length * TIME_PER_QUESTION,
    }));
  }, []);
  
  const submitAnswer = useCallback((question: Question, userAnswer: string) => {
    const isCorrect = question.correctAnswer === userAnswer;
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
    }));
  }, []);
  
  const startNewTest = useCallback(() => {
    setState(prevState => ({
        ...prevState,
        currentSubject: null,
        currentChapter: null,
        quizQuestions: [],
        quizAttempts: [],
        startTime: null,
        endTime: null,
        quizDuration: null,
        bookmarkedQuestions: [],
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
            quizDuration: questionsToRetake.length * TIME_PER_QUESTION,
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
      quizDuration: prevState.quizQuestions.length * TIME_PER_QUESTION,
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
          quizDuration: shuffled.length * TIME_PER_QUESTION,
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
                  quizDuration: shuffled.length * TIME_PER_QUESTION,
              };
          }
          return prevState;
      });
  }, []);

  return (
    <QuizContext.Provider value={{
      ...state,
      login,
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