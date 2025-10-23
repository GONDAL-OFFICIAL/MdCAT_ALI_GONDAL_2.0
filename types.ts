

export interface User {
  username: string;
  password?: string;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export type Chapters = {
  [subject: string]: string[];
};

export type Mcqs = {
  [subject: string]: {
    [chapter: string]: Question[];
  };
};

export interface QuizAttempt {
  question: Question;
  userAnswer: string;
  isCorrect: boolean;
}

export interface QuizState {
  user: User | null;
  subjects: string[];
  chapters: Chapters;
  mcqs: Mcqs;
  currentSubject: string | null;
  currentChapter: string | null;
  quizQuestions: Question[];
  quizAttempts: QuizAttempt[];
  startTime: number | null;
  endTime: number | null;
  quizDuration: number | null;
  timePerQuestion: number | null;
  bookmarkedQuestions: Question[];
}

export interface QuizContextType extends QuizState {
  login: (username: string, password: string) => void;
  logout: () => void;
  selectSubject: (subject: string) => void;
  selectChapter: (chapter: string) => void;
  startQuiz: (questions: Question[], timePerQuestion: number) => void;
  submitAnswer: (question: Question, userAnswer: string, forceIncorrect?: boolean) => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
  startNewTest: () => void;
  startRetake: () => void;
  retakeFullQuiz: () => void;
  toggleBookmark: (question: Question) => void;
  startBookmarkedQuiz: () => void;
  startWrongAndBookmarkedQuiz: () => void;
}