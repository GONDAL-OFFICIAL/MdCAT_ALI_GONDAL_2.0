import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { ArrowLeft, Book, ChevronRight } from 'lucide-react';

const ChapterPage: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const { chapters, selectChapter, mcqs } = useContext(QuizContext);
  const navigate = useNavigate();

  if (!subject) {
    return <p>Subject not found!</p>;
  }

  const subjectChapters = chapters[subject] || [];

  const handleChapterClick = (chapter: string) => {
    selectChapter(chapter);
    navigate(`/setup/${subject}/${chapter}`);
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
      <h2 className="text-3xl font-bold text-center text-teal-400">Chapters for {subject}</h2>
      <ul className="space-y-4">
        {subjectChapters.map((chapter) => {
           const questionCount = mcqs[subject]?.[chapter]?.length || 0;
           return (
            <li key={chapter}>
                <button
                onClick={() => handleChapterClick(chapter)}
                disabled={questionCount === 0}
                className="w-full group flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-teal-800 transition-all duration-300 disabled:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                <div className="flex items-center">
                    <Book className="w-6 h-6 mr-4 text-teal-400" />
                    <span className="text-lg font-medium text-white">{chapter}</span>
                    <span className="ml-4 text-sm text-gray-400">({questionCount} Questions)</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </button>
            </li>
        )})}
      </ul>
    </div>
  );
};

export default ChapterPage;
