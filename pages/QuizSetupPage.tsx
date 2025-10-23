import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { Play, ArrowLeft, Hash, Clock } from 'lucide-react';

type TimeMode = 'slow' | 'intermediate' | 'fast' | 'custom';

const timerOptions: { id: TimeMode; label: string; icon: string; time: number | null }[] = [
    { id: 'slow', label: 'Slow', icon: '🐌', time: 60 },
    { id: 'intermediate', label: 'Intermediate', icon: '🐘', time: 30 },
    { id: 'fast', label: 'Fast', icon: '🐆', time: 15 },
    { id: 'custom', label: 'Custom', icon: '⚙️', time: null },
];

const QuizSetupPage: React.FC = () => {
  const { subject, chapter } = useParams<{ subject: string, chapter: string }>();
  const { mcqs, startQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  const questions = (subject && chapter && mcqs[subject]?.[chapter]) || [];
  const totalAvailableQuestions = questions.length;
  
  const [numQuestions, setNumQuestions] = useState(totalAvailableQuestions);
  const [timeMode, setTimeMode] = useState<TimeMode>('slow');
  const [customTime, setCustomTime] = useState(60);

  useEffect(() => {
    setNumQuestions(totalAvailableQuestions);
  }, [totalAvailableQuestions]);
  
  if (!subject || !chapter) {
    return <p>Error: Subject or chapter not specified.</p>;
  }

  const timePerQuestion = (() => {
    switch (timeMode) {
        case 'slow': return 60;
        case 'intermediate': return 30;
        case 'fast': return 15;
        case 'custom': return customTime > 0 ? customTime : 1;
    }
  })();

  const estimatedTime = Math.ceil((numQuestions * timePerQuestion) / 60);

  const handleStartQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, numQuestions);
    startQuiz(selectedQuestions, timePerQuestion);
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

                {/* Timer Mode Selector */}
                <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-4 text-teal-300 flex items-center justify-center">
                        <Clock className="w-5 h-5 mr-2" /> Timer Mode
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {timerOptions.map(option => (
                            <button
                                key={option.id}
                                onClick={() => setTimeMode(option.id)}
                                className={`p-4 rounded-lg transition-all border-2 ${timeMode === option.id ? 'bg-teal-600 border-teal-400' : 'bg-gray-600 border-gray-500 hover:border-teal-500'}`}
                            >
                                <div className="text-3xl">{option.icon}</div>
                                <div className="font-semibold mt-1">{option.label}</div>
                                <div className="text-xs text-gray-300">{option.time ? `${option.time}s / Q` : 'Custom'}</div>
                            </button>
                        ))}
                    </div>
                    {timeMode === 'custom' && (
                        <div className="mt-4 flex items-center justify-center space-x-2">
                            <input
                                type="number"
                                value={customTime}
                                onChange={e => setCustomTime(parseInt(e.target.value) || 1)}
                                className="w-24 px-2 py-1 text-center text-white bg-gray-900 border border-gray-600 rounded-md"
                                min="1"
                            />
                            <span className="text-gray-300">seconds per question</span>
                        </div>
                    )}
                </div>

                <p className="text-lg text-gray-300 pt-4">
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