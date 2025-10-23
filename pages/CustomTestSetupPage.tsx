import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { Question } from '../types';
import { ArrowLeft, Play, ListTodo, Hash, Clock } from 'lucide-react';

type TimeMode = 'slow' | 'intermediate' | 'fast' | 'custom';

const timerOptions: { id: TimeMode; label: string; icon: string; time: number | null }[] = [
    { id: 'slow', label: 'Slow', icon: '🐌', time: 60 },
    { id: 'intermediate', label: 'Intermediate', icon: '🐘', time: 30 },
    { id: 'fast', label: 'Fast', icon: '🐆', time: 15 },
    { id: 'custom', label: 'Custom', icon: '⚙️', time: null },
];

const CustomTestSetupPage: React.FC = () => {
  const { subjects, chapters, mcqs, startQuiz } = useContext(QuizContext);
  const navigate = useNavigate();
  
  const [selectedChapters, setSelectedChapters] = useState<{[key: string]: string[]}>({});
  const [numQuestions, setNumQuestions] = useState(0);
  const [timeMode, setTimeMode] = useState<TimeMode>('slow');
  const [customTime, setCustomTime] = useState(60);

  const handleChapterToggle = (subject: string, chapter: string) => {
    setSelectedChapters(prev => {
      const currentSubjectChapters = prev[subject] || [];
      const newSubjectChapters = currentSubjectChapters.includes(chapter)
        ? currentSubjectChapters.filter(c => c !== chapter)
        : [...currentSubjectChapters, chapter];
      return { ...prev, [subject]: newSubjectChapters };
    });
  };

  const allQuestions: Question[] = Object.entries(selectedChapters).flatMap(([subject, chaps]) => 
    chaps.flatMap(chap => mcqs[subject]?.[chap] || [])
  );
    
  const totalAvailableQuestions = allQuestions.length;
  const maxQuestionsAllowed = totalAvailableQuestions;

  useEffect(() => {
    if (totalAvailableQuestions > 0) {
      setNumQuestions(currentNum => {
        const newNum = currentNum === 0 ? Math.min(20, totalAvailableQuestions) : currentNum;
        return Math.min(newNum, totalAvailableQuestions);
      });
    } else {
      setNumQuestions(0);
    }
  }, [totalAvailableQuestions]);

  const timePerQuestion = (() => {
    switch (timeMode) {
        case 'slow': return 60;
        case 'intermediate': return 30;
        case 'fast': return 15;
        case 'custom': return customTime > 0 ? customTime : 1;
    }
  })();

  const estimatedTime = Math.ceil((numQuestions * timePerQuestion) / 60);

  const handleStartCustomTest = () => {
    if (allQuestions.length === 0 || numQuestions === 0) {
      alert("Please select at least one chapter and set a number of questions.");
      return;
    }
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numQuestions);
    startQuiz(selected, timePerQuestion);
    navigate('/quiz');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/subjects')}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Subjects
        </button>
      </div>
      <h2 className="text-3xl font-bold text-center text-teal-400">Create a Custom Test</h2>

      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-teal-300 flex items-center">
            <ListTodo className="w-6 h-6 mr-2" /> Select Chapters
        </h3>
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {subjects.map(subject => (
                <div key={subject}>
                    <h4 className="font-bold text-lg text-gray-200 mb-2">{subject}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {(chapters[subject] || []).map(chapter => {
                            const questionCount = mcqs[subject]?.[chapter]?.length || 0;
                            return (
                                <label key={`${subject}-${chapter}`} className={`flex items-center p-2 rounded-md transition-colors ${questionCount > 0 ? 'cursor-pointer hover:bg-gray-700' : 'opacity-50'}`}>
                                    <input
                                        type="checkbox"
                                        disabled={questionCount === 0}
                                        checked={selectedChapters[subject]?.includes(chapter) || false}
                                        onChange={() => handleChapterToggle(subject, chapter)}
                                        className="h-4 w-4 rounded border-gray-500 bg-gray-600 text-teal-600 focus:ring-teal-500"
                                    />
                                    <span className="ml-3 text-sm text-gray-300">{chapter} ({questionCount})</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-300 flex items-center">
                    <Hash className="w-6 h-6 mr-2" /> Number of Questions
                </h3>
                <div className="flex items-center space-x-4">
                    <input 
                        type="range" 
                        min={totalAvailableQuestions > 0 ? 1 : 0}
                        max={maxQuestionsAllowed} 
                        value={numQuestions}
                        onChange={e => setNumQuestions(parseInt(e.target.value))}
                        disabled={totalAvailableQuestions === 0}
                        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <input 
                        type="number"
                        min="0"
                        max={maxQuestionsAllowed}
                        value={numQuestions}
                        onChange={e => setNumQuestions(parseInt(e.target.value) || 0)}
                        disabled={totalAvailableQuestions === 0}
                        className="w-20 px-2 py-1 text-center text-white bg-gray-700 border border-gray-600 rounded-md"
                    />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                Total available from selection: <span className="font-bold text-white">{totalAvailableQuestions}</span>
                </p>
            </div>
            
            <hr className="border-gray-700" />

            <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-300 flex items-center">
                    <Clock className="w-6 h-6 mr-2" /> Timer Mode
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
        </div>
      </div>

       <div className="text-center bg-gray-800 p-4 rounded-lg">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-teal-300">Test Summary</h3>
            <p className="text-gray-300">
              <span className="font-bold text-white">{numQuestions}</span> questions with an estimated time of <span className="font-bold text-white">~{estimatedTime} minutes</span>.
            </p>
          </div>
          <button
            onClick={handleStartCustomTest}
            disabled={totalAvailableQuestions === 0 || numQuestions === 0}
            className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Custom Test
          </button>
      </div>
    </div>
  );
};

export default CustomTestSetupPage;