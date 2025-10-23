
import React from 'react';
import { X, MessageSquare, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fadeInOverlay">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-sm flex flex-col animate-scaleIn">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold text-teal-400 flex items-center">
            <MessageSquare className="w-6 h-6 mr-2" />
            Contact Me
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-6">
          <p className="text-gray-300">
            Have questions or need support? Reach out directly on WhatsApp!
          </p>
          <a
            href="https://wa.me/+923398437701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
          >
            Chat on WhatsApp
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
