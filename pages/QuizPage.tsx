import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
// FIX: Corrected import path to point to the data module in the 'data' directory.
import { TIME_PER_QUESTION } from '../data/index';

const QuizPage: React.FC = () => {
  const { quizQuestions, submitAnswer, finishQuiz } = useContext(QuizContext);
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);

  useEffect(() => {
    if (quizQuestions.length === 0) {
      navigate('/subjects');
      return;
    }
    const timer = setInterval(() => {
        setTimeLeft(prev => {
            if (prev <= 1) {
                handleNext();
                return TIME_PER_QUESTION;
            }
            return prev - 1;
        });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, quizQuestions.length, navigate]);

  const handleNext = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    submitAnswer(currentQuestion, selectedOption || "Not Answered");
    setSelectedOption(null);
    setTimeLeft(TIME_PER_QUESTION);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
      navigate('/results');
    }
  };

  if (quizQuestions.length === 0) {
    return null; // or a loading spinner
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-800 rounded-lg shadow-2xl animate-fadeIn space-y-6">
      {/* Header with Progress and Timer */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-teal-400">Question {currentQuestionIndex + 1} of {quizQuestions.length}</h3>
        <div className="text-lg font-bold text-red-400">Time Left: {timeLeft}s</div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {/* Question */}
      <div className="py-6">
        <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">{currentQuestion.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
            selectedOption === option 
              ? 'border-teal-500 bg-teal-900' 
              : 'border-gray-600 bg-gray-700 hover:bg-gray-600'
          }`}>
            <input 
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="hidden"
            />
            <span className={`flex-grow text-white ${selectedOption === option ? 'font-semibold' : ''}`}>{option}</span>
          </label>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-6">
        <button
          onClick={handleNext}
          className="px-8 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-gray-500"
        >
          {currentQuestionIndex < quizQuestions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;