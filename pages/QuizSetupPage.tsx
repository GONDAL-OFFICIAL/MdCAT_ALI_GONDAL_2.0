import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { Play, ArrowLeft, Hash } from 'lucide-react';
import { TIME_PER_QUESTION } from '../data/index';

const QuizSetupPage: React.FC = () => {
  const { subject, chapter } = useParams<{ subject: string, chapter: string }>();
  const { mcqs, startQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  const questions = (subject && chapter && mcqs[subject]?.[chapter]) || [];
  const totalAvailableQuestions = questions.length;
  
  const [numQuestions, setNumQuestions] = useState(totalAvailableQuestions);

  useEffect(() => {
    // Set the initial number of questions to all available when the component loads or chapter changes.
    setNumQuestions(totalAvailableQuestions);
  }, [totalAvailableQuestions]);
  
  if (!subject || !chapter) {
    return <p>Error: Subject or chapter not specified.</p>;
  }

  const estimatedTime = numQuestions; // 1 min per question

  const handleStartQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, numQuestions);
    startQuiz(selectedQuestions);
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
                
                {/* Number of Questions Selector */}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-4 text-teal-300 flex items-center justify-center">
                      <Hash className="w-5 h-5 mr-2" /> Number of Questions
                  </h3>
                  <div className="flex items-center space-x-4">
                      <input 
                          type="range" 
                          min={totalAvailableQuestions > 0 ? 1 : 0}
                          max={totalAvailableQuestions} 
                          value={numQuestions}
                          onChange={e => setNumQuestions(parseInt(e.target.value))}
                          disabled={totalAvailableQuestions === 0}
                          className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      />
                      <input 
                          type="number"
                          min="0"
                          max={totalAvailableQuestions}
                          value={numQuestions}
                          onChange={e => setNumQuestions(parseInt(e.target.value) || 0)}
                          disabled={totalAvailableQuestions === 0}
                          className="w-20 px-2 py-1 text-center text-white bg-gray-900 border border-gray-600 rounded-md"
                      />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Total available: <span className="font-bold text-white">{totalAvailableQuestions}</span>
                  </p>
                </div>

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
                    disabled={numQuestions === 0}
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