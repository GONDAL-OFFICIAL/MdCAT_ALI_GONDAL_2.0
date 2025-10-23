import React, { createContext, useState, ReactNode } from 'react';
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
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>(initialState);

  const login = (username: string, password: string) => {
    const userExists = users.find(
      u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );
    if (userExists) {
      setState(prevState => ({ ...prevState, user: { username: userExists.username } }));
    } else {
      alert("Invalid username or password!");
    }
  };

  const selectSubject = (subject: string) => {
    setState(prevState => ({ ...prevState, currentSubject: subject }));
  };

  const selectChapter = (chapter: string) => {
    setState(prevState => ({ ...prevState, currentChapter: chapter }));
  };

  const startQuiz = (questions: Question[]) => {
    setState(prevState => ({
      ...prevState,
      quizQuestions: questions,
      quizAttempts: [],
      startTime: Date.now(),
      endTime: null,
      quizDuration: questions.length * TIME_PER_QUESTION,
    }));
  };
  
  const submitAnswer = (question: Question, userAnswer: string) => {
    const isCorrect = question.correctAnswer === userAnswer;
    const attempt: QuizAttempt = { question, userAnswer, isCorrect };
    setState(prevState => ({
      ...prevState,
      quizAttempts: [...prevState.quizAttempts, attempt],
    }));
  };

  const finishQuiz = () => {
    // Prevent finishing if already finished to avoid resetting endTime
    if (state.endTime) return;
    setState(prevState => ({ ...prevState, endTime: Date.now() }));
  };
  
  const resetQuiz = () => {
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
  };
  
  const startNewTest = () => {
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
  }

  const startRetake = (): boolean => {
    const questionsToRetake = state.quizAttempts
      .filter(attempt => !attempt.isCorrect)
      .map(attempt => attempt.question);
    
    // Only proceed if there are actually incorrect questions to retake.
    if (questionsToRetake.length > 0) {
      setState(prevState => ({
          ...prevState,
          quizQuestions: questionsToRetake,
          quizAttempts: [],
          startTime: Date.now(),
          endTime: null,
          quizDuration: questionsToRetake.length * TIME_PER_QUESTION,
      }));
      return true; // Signal that the retake quiz was successfully set up.
    }
    
    // If there are no incorrect questions, do nothing and signal failure.
    console.warn("Attempted to retake a quiz with no incorrect answers.");
    return false;
  }

  const retakeFullQuiz = () => {
    setState(prevState => ({
      ...prevState,
      quizAttempts: [],
      startTime: Date.now(),
      endTime: null,
      quizDuration: prevState.quizQuestions.length * TIME_PER_QUESTION,
    }));
  };

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
    }}>
      {children}
    </QuizContext.Provider>
  );
};