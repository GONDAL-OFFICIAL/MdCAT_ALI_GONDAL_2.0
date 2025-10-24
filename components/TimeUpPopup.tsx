import React from 'react';
import { Clock } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TimeUpPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeInOverlay">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-md flex flex-col animate-scaleIn text-center">
        <div className="flex justify-center items-center p-6 border-b border-gray-700">
          <Clock className="w-10 h-10 text-yellow-400 mr-4" />
          <h3 className="text-2xl font-bold text-yellow-400">
            Time's Up!
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-gray-300">
            The timer has run out. You can continue the test to see the remaining questions.
          </p>
          <p className="text-sm text-red-400 font-semibold">
            Please note: Any answers submitted from now on will be marked as incorrect.
          </p>
        </div>
        <div className="p-4 bg-gray-900/50">
           <button
             onClick={onClose}
             className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500 transition-all duration-300 transform hover:scale-105"
           >
             Continue Test
           </button>
        </div>
      </div>
    </div>
  );
};

export default TimeUpPopup;
