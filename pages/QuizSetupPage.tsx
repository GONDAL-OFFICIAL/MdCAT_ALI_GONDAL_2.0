import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { Play, ArrowLeft } from 'lucide-react';
// FIX: Corrected import path to point to the data module in the 'data' directory.
import { TIME_PER_QUESTION } from '../data/index';

const QuizSetupPage: React.FC = () => {
  const { subject, chapter } = useParams<{ subject: string, chapter: string }>();
  const { mcqs, startQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  if (!subject || !chapter) {
    return <p>Error: Subject or chapter not specified.</p>;
  }

  const questions = mcqs[subject]?.[chapter] || [];
  const questionCount = questions.length;
  const estimatedTime = Math.ceil((questionCount * TIME_PER_QUESTION) / 60);

  const handleStartQuiz = () => {
    startQuiz(questions);
    navigate('/quiz');
  };
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-140px)] animate-fadeIn">
        <div className="w-full max-w-2xl p-8 space-y-8 text-center bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-teal-400">Quiz Setup</h2>
            <div className="p-6 bg-gray-700 rounded-lg space-y-4">
                <p className="text-xl text-gray-200">
                    <span className="font-semibold text-teal-300">Subject:</span> {subject}
                </p>
                <p className="text-xl text-gray-200">
                    <span className="font-semibold text-teal-300">Chapter:</span> {chapter}
                </p>
                <hr className="border-gray-600" />
                <p className="text-lg text-gray-300">
                    Number of Questions: <span className="font-bold text-white">{questionCount}</span>
                </p>
                <p className="text-lg text-gray-300">
                    Estimated Time: <span className="font-bold text-white">~{estimatedTime} minutes</span>
                </p>
            </div>
            <div className="flex justify-center space-x-4">
                 <button
                    onClick={() => navigate(`/chapters/${subject}`)}
                    className="flex items-center px-6 py-3 text-base font-medium text-gray-300 bg-gray-600 rounded-md hover:bg-gray-500 transition-colors"
                    >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Go Back
                </button>
                <button
                    onClick={handleStartQuiz}
                    disabled={questionCount === 0}
                    className="flex items-center px-8 py-3 text-base font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                    >
                    <Play className="w-5 h-5 mr-2" />
                    Start Quiz
                </button>
            </div>
        </div>
    </div>
  );
};

export default QuizSetupPage;