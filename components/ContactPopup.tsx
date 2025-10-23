
import React from 'react';
import { X, MessageSquare, ExternalLink, UserPlus } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  variant: 'contact' | 'signup';
}

const contactInfo = {
  title: "Contact Me",
  message: "Have questions or need support? Reach out directly on WhatsApp!",
  buttonText: "Chat on WhatsApp",
  icon: <MessageSquare className="w-6 h-6 mr-2" />
};

const signupInfo = {
    title: "Sign Up Now",
    message: "Need an account? Contact us on WhatsApp to get registered!",
    buttonText: "Request Account",
    icon: <UserPlus className="w-6 h-6 mr-2" />
};


const ContactPopup: React.FC<Props> = ({ isOpen, onClose, variant }) => {
  if (!isOpen) return null;
  
  const info = variant === 'signup' ? signupInfo : contactInfo;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fadeInOverlay">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-sm flex flex-col animate-scaleIn">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold text-teal-400 flex items-center">
            {info.icon}
            {info.title}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-6">
          <p className="text-gray-300">
            {info.message}
          </p>
          <a
            href="https://wa.me/+923398437701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
          >
            {info.buttonText}
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
