import React, { useState, useContext, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { LogIn, Calculator } from 'lucide-react';
import AggregateCalculatorPopup from '../components/AggregateCalculatorPopup';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const { login, user } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim(), password);
    }
  };

  if (user) {
    navigate('/subjects');
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-140px)]">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-center text-teal-400">Welcome Back!</h2>
            <p className="text-center text-gray-400">Enter your credentials to start the quiz.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-300 sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g., Ali"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" aria-label="Password" className="text-sm font-medium text-gray-300 sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500 transition-colors duration-300"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </button>
          </form>
          
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-500">OR</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsCalculatorOpen(true)}
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500 transition-colors duration-300"
          >
            <Calculator className="w-5 h-5 mr-2" />
            MDCAT Aggregate Calculator
          </button>

        </div>
      </div>
      <AggregateCalculatorPopup isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </>
  );
};

export default LoginPage;