
import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useContext(QuizContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">Modern Quiz Platform</h1>
          {user && <span className="text-gray-300">Welcome, {user.username}</span>}
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} testing PRO. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;