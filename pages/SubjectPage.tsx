import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { ArrowRight, BookOpen, SlidersHorizontal } from 'lucide-react';

const SubjectPage: React.FC = () => {
  const { subjects, selectSubject } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleSubjectClick = (subject: string) => {
    selectSubject(subject);
    navigate(`/chapters/${subject}`);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center text-teal-400">Choose a Subject</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => handleSubjectClick(subject)}
            className="group flex items-center justify-between p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-teal-800 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 mr-4 text-teal-400" />
              <span className="text-xl font-semibold text-white">{subject}</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </button>
        ))}
      </div>
       <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/custom-setup')}
          className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
        >
          <SlidersHorizontal className="w-5 h-5 mr-3" />
          Create a Custom Test
        </button>
      </div>
    </div>
  );
};

export default SubjectPage;
