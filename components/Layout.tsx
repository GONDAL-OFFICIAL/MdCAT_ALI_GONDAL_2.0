
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import ContactPopup from './ContactPopup';
import { MessageSquare, UserPlus } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useContext(QuizContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  const isQuizPage = location.pathname === '/quiz';
  const showActionButton = !isQuizPage;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">Modern Quiz Platform</h1>
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user.username}</span>
            </div>
          )}
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} testing PRO. All rights reserved.
      </footer>

      {showActionButton && (
        <div className="fixed bottom-6 right-6 z-40">
           <button
             onClick={() => setIsPopupOpen(true)}
             className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
             aria-label={user ? "Contact Me" : "Sign Up"}
           >
             {user ? <MessageSquare className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
           </button>
        </div>
      )}

      <ContactPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        variant={user ? 'contact' : 'signup'}
      />
    </div>
  );
};

export default Layout;