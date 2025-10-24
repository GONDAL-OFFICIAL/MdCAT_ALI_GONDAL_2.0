import React from 'react';
import { LogOut } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ExitConfirmationPopup: React.FC<Props> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeInOverlay">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-md flex flex-col animate-scaleIn text-center">
        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">
            Are you sure you want to exit?
          </h3>
          <p className="text-gray-300">
            Your current progress will be lost, and the quiz will end.
          </p>
        </div>
        <div className="flex justify-center space-x-4 p-4 bg-gray-900/50 rounded-b-lg">
           <button
             onClick={onCancel}
             className="px-6 py-2 text-base font-medium text-gray-300 bg-gray-600 rounded-md hover:bg-gray-500 transition-colors"
           >
             Cancel
           </button>
           <button
             onClick={onConfirm}
             className="flex items-center px-6 py-2 text-base font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
           >
            <LogOut className="w-5 h-5 mr-2" />
             Exit Test
           </button>
        </div>
      </div>
    </div>
  );
};

export default ExitConfirmationPopup;
