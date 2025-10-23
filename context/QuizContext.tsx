import React, { createContext, useState, ReactNode } from 'react';
import { QuizState, QuizContextType, User, Question, QuizAttempt } from '../types';
// Fix: Explicitly import from '../data/index' to avoid resolving to the empty 'data.ts' file.
import { users, subjects, chapters } from '../data/index';
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
    }));
  }

  const startRetake = () => {
    const questionsToRetake = state.quizAttempts
      .filter(attempt => !attempt.isCorrect)
      .map(attempt => attempt.question);
    
    setState(prevState => ({
        ...prevState,
        quizQuestions: questionsToRetake.length > 0 ? questionsToRetake : state.quizQuestions,
        quizAttempts: [],
        startTime: Date.now(),
        endTime: null,
    }));
  }

  const retakeFullQuiz = () => {
    setState(prevState => ({
      ...prevState,
      // quizQuestions are already set from the previous quiz
      quizAttempts: [],
      startTime: Date.now(),
      endTime: null,
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