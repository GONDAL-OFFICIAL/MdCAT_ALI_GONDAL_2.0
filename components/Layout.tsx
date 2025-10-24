import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'; // 1. Import Link
import ContactPopup from './ContactPopup';
import { MessageSquare, UserPlus, LogOut, Trophy } from 'lucide-react'; // 2. Import Trophy

// 3. Import Firebase Auth
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig'; // Adjust path if needed (e.g., ../firebaseConfig)
import { signOut } from 'firebase/auth';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 4. Use Firebase Auth hook instead of QuizContext
  const [user, loading] = useAuthState(auth); 
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isQuizPage = location.pathname === '/quiz';
  const showActionButton = !isQuizPage;

  // 5. Create a new logout function that uses Firebase
  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">MdCAT "ALI GONDAL"</h1>
          
          {/* 6. Wait for loading to finish, then check for user */}
          {!loading && user && (
            <div className="flex items-center space-x-2 md:space-x-4">
              
              {/* Note: Firebase user object uses 'email' or 'displayName', not 'username' */}
              <span className="text-gray-300 hidden md:block">Welcome, {user.displayName || user.email}</span>
              
              {/* --- 7. HERE IS YOUR NEW LEADERBOARD BUTTON --- */}
              <Link
                to="/leaderboard"
                className="flex items-center px-3 py-1.5 text-sm font-medium text-teal-400 bg-gray-700 rounded-md hover:bg-teal-900/50 hover:text-teal-300 transition-colors"
                aria-label="Leaderboard"
              >
                <Trophy className="w-4 h-4 mr-0 md:mr-2" />
                <span className="hidden md:block">Leaderboard</span>
              </Link>
              
              {/* This Logout button will now work correctly */}
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-1.5 text-sm font-medium text-red-400 bg-gray-700 rounded-md hover:bg-red-900/50 hover:text-red-300 transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-4 h-4 mr-0 md:mr-2" />
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Ali Gondal. All rights reserved.
      </footer>

      {/* This floating button will also work correctly now */}
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