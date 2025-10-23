import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { Check, X, Bookmark } from 'lucide-react';

const QuizPage: React.FC = () => {
  const { quizQuestions, submitAnswer, finishQuiz, quizDuration, bookmarkedQuestions, toggleBookmark } = useContext(QuizContext);
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quizDuration || 0);

  // Main quiz countdown timer
  useEffect(() => {
    if (!quizDuration || quizQuestions.length === 0) {
      navigate('/subjects');
      return;
    }

    setTimeLeft(quizDuration);

    const timerId = setInterval(() => {
        setTimeLeft(prevTime => {
            if (prevTime <= 1) {
                clearInterval(timerId);
                finishQuiz();
                navigate('/results');
                return 0;
            }
            return prevTime - 1;
        });
    }, 1000);

    return () => clearInterval(timerId);
  }, [quizDuration, quizQuestions.length, navigate, finishQuiz]);

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return; // Prevent changing answer
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const handleNext = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    submitAnswer(currentQuestion, selectedOption || "Not Answered");
    
    // Reset for next question
    setSelectedOption(null);
    setIsAnswered(false);

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

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  const isBookmarked = bookmarkedQuestions.some(q => q.question === currentQuestion.question);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-800 rounded-lg shadow-2xl animate-fadeIn space-y-6">
      {/* Header with Progress and Timer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-teal-400">Question {currentQuestionIndex + 1} of {quizQuestions.length}</h3>
          <button
            onClick={() => toggleBookmark(currentQuestion)}
            className="text-gray-400 hover:text-yellow-400 transition-colors"
            aria-label="Bookmark question"
          >
            <Bookmark className={`w-6 h-6 ${isBookmarked ? 'text-yellow-400 fill-current' : ''}`} />
          </button>
        </div>
        <div className="text-lg font-bold text-red-400">Time Left: {formatTime(timeLeft)}</div>
      </div>
      
      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-teal-400 to-cyan-500 h-4 rounded-full transition-all duration-500 ease-out progress-bar-striped animate-progress-bar" 
          style={{ width: `${progressPercentage}%` }}>
        </div>
      </div>

      {/* Question */}
      <div className="py-6">
        <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">{currentQuestion.question}</p>
      </div>

      {/* Options with Instant Feedback */}
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => {
            const isCorrectAnswer = option === currentQuestion.correctAnswer;
            const isSelected = option === selectedOption;

            let optionClass = 'border-gray-600 bg-gray-700';
            let cursorClass = 'cursor-pointer hover:bg-gray-600';
            let icon = null;

            if (isAnswered) {
                cursorClass = 'cursor-not-allowed';
                if (isCorrectAnswer) {
                    optionClass = 'bg-green-900/50 border-green-500';
                    icon = <Check className="w-6 h-6 text-green-400" />;
                } else if (isSelected) {
                    optionClass = 'bg-red-900/50 border-red-500';
                    icon = <X className="w-6 h-6 text-red-400" />;
                } else {
                    optionClass = 'border-gray-700 bg-gray-800 opacity-60';
                }
            }
          
            return (
              <div
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 ${optionClass} ${cursorClass}`}
              >
                <span className="text-white">{option}</span>
                {icon}
              </div>
            );
        })}
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-6">
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="px-8 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex < quizQuestions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;