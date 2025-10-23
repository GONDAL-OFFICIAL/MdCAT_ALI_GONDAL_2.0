
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { CheckCircle, XCircle, Clock, Percent, Hash, Repeat, FileText, Home, Bookmark, Star } from 'lucide-react';

const ResultPage: React.FC = () => {
  const { quizAttempts, startTime, endTime, startNewTest, startRetake, retakeFullQuiz, bookmarkedQuestions, startBookmarkedQuiz, startWrongAndBookmarkedQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  // This effect validates that the page was accessed legitimately on its initial load.
  // It runs only once and redirects if no completed quiz data is found.
  useEffect(() => {
    if (quizAttempts.length === 0 || !startTime || !endTime) {
      navigate('/subjects');
    }
  }, []); // The empty dependency array ensures this runs only on mount.

  // This prevents rendering errors if the initial state is invalid,
  // and also gracefully handles the momentary invalid state when a retake is initiated,
  // preventing the page from crashing before navigation to '/quiz' occurs.
  if (quizAttempts.length === 0 || !startTime || !endTime) {
    return null; // Render nothing while redirecting or before re-rendering for a new quiz.
  }

  const correctAnswers = quizAttempts.filter(attempt => attempt.isCorrect).length;
  const totalQuestions = quizAttempts.length;
  const scorePercentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
  const timeTaken = Math.round((endTime - startTime) / 1000); // in seconds
  
  const incorrectQuestionsCount = quizAttempts.filter(attempt => !attempt.isCorrect).length;
  const bookmarkedCount = bookmarkedQuestions.length;
  const combinedUniqueCount = new Set([
    ...quizAttempts.filter(a => !a.isCorrect).map(a => a.question.question),
    ...bookmarkedQuestions.map(q => q.question)
  ]).size;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 animate-fadeIn space-y-8">
      <h2 className="text-4xl font-bold text-center text-teal-400">Quiz Results</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <CheckCircle className="w-12 h-12 text-green-500"/>
            <div>
                <p className="text-gray-400">Correct</p>
                <p className="text-2xl font-bold">{correctAnswers}</p>
            </div>
        </div>
         <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Hash className="w-12 h-12 text-gray-400"/>
            <div>
                <p className="text-gray-400">Total</p>
                <p className="text-2xl font-bold">{totalQuestions}</p>
            </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Percent className="w-12 h-12 text-teal-400"/>
            <div>
                <p className="text-gray-400">Score</p>
                <p className="text-2xl font-bold">{scorePercentage.toFixed(2)}%</p>
            </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Clock className="w-12 h-12 text-yellow-500"/>
            <div>
                <p className="text-gray-400">Time Taken</p>
                <p className="text-2xl font-bold">{timeTaken}s</p>
            </div>
        </div>
      </div>

      {/* Action Buttons */}
       <div className="flex flex-wrap justify-center gap-4 py-6">
        <button
          onClick={() => { startNewTest(); navigate('/subjects'); }}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2" />
          New Test
        </button>
        <button
          onClick={() => { if (startRetake()) navigate('/quiz'); }}
          disabled={incorrectQuestionsCount === 0}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <Repeat className="w-5 h-5 mr-2" />
          Retake Incorrect ({incorrectQuestionsCount})
        </button>
        <button
          onClick={() => { if (startBookmarkedQuiz()) navigate('/quiz'); }}
          disabled={bookmarkedCount === 0}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <Bookmark className="w-5 h-5 mr-2" />
          Test Bookmarked ({bookmarkedCount})
        </button>
        <button
          onClick={() => { if (startWrongAndBookmarkedQuiz()) navigate('/quiz'); }}
          disabled={combinedUniqueCount === 0}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <Star className="w-5 h-5 mr-2" />
          Test Wrong & Bookmarked ({combinedUniqueCount})
        </button>
        <button
          onClick={() => { retakeFullQuiz(); navigate('/quiz'); }}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-all transform hover:scale-105"
        >
          <FileText className="w-5 h-5 mr-2" />
          Retake Full Test
        </button>
      </div>


      {/* Detailed Review */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300">Review Your Answers</h3>
        {quizAttempts.map((attempt, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${attempt.isCorrect ? 'bg-green-900/50 border-l-4 border-green-500' : 'bg-red-900/50 border-l-4 border-red-500'}`}>
            <p className="font-semibold text-lg text-white mb-2">Q{index + 1}: {attempt.question.question}</p>
            <div className="space-y-2 mt-4 text-sm">
                {attempt.question.options.map(option => {
                    const isCorrect = option === attempt.question.correctAnswer;
                    const isUserChoice = option === attempt.userAnswer;
                    let optionClass = "border-gray-600";
                    if (isCorrect) optionClass = "bg-green-800/50 border-green-500";
                    if (isUserChoice && !isCorrect) optionClass = "bg-red-800/50 border-red-500";
                    
                    return (
                         <div key={option} className={`p-3 border rounded-md ${optionClass} flex items-center`}>
                           {isCorrect && <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />}
                           {isUserChoice && !isCorrect && <XCircle className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />}
                           <span className="text-gray-200">{option}</span>
                         </div>
                    )
                })}
            </div>
            <p className={`mt-3 text-xs ${attempt.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                Your answer: <span className="font-bold">{attempt.userAnswer || 'Not Answered'}</span>. 
                {!attempt.isCorrect && <> Correct answer: <span className="font-bold">{attempt.question.correctAnswer}</span></>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;