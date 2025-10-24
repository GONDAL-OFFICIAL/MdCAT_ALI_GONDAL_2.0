// src/components/LoginPage.tsx

import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { LogIn, Calculator } from 'lucide-react';
import AggregateCalculatorPopup from '../components/AggregateCalculatorPopup';

// --- 1. Import Firebase Auth ---
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'; // This is a helpful hook
import { auth } from '../firebaseConfig'; // Import your configured auth object

const LoginPage: React.FC = () => {
  // --- 2. Change state to email ---
  // Firebase's system uses email, not username, by default.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To show login errors
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const navigate = useNavigate();

  // --- 3. Use useAuthState to check if user is already logged in ---
  // This hook is from 'react-firebase-hooks/auth'
  // (You may need to install it: npm install react-firebase-hooks)
  const [user, loading] = useAuthState(auth);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(''); // Clear old errors

    try {
      // --- 4. Use Firebase login function ---
      // This is the core change. We're not using your QuizContext.login anymore.
      await signInWithEmailAndPassword(auth, email, password);
      
      // On success, the 'user' object from useAuthState will update,
      // and the useEffect below will automatically redirect.

    } catch (err: any) {
      console.error(err);
      // --- 5. Handle common Firebase errors ---
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password.');
      } else {
        setError('Failed to log in. Please try again.');
      }
    }
  };

  // --- 6. Redirect if user is logged in (or on login success) ---
  // This hook runs when 'user' or 'navigate' changes.
  useEffect(() => {
    if (user) {
      // If user is logged in, send them to the subjects page.
      navigate('/subjects');
    }
  }, [user, navigate]);

  // Show a loading screen while Firebase checks auth status
  if (loading) {
    return <div className="text-white text-center p-10">Loading...</div>; 
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
              {/* --- 7. Change input to Email --- */}
              <label htmlFor="email" className="text-sm font-medium text-gray-300 sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email" // Use type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              {/* Your password input is fine */}
              <label htmlFor="password" aria-label="Password" className="text-sm font-medium text-gray-300 sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {/* --- 8. Show error message if it exists --- */}
            {error && <p className="text-sm text-red-400 text-center">{error}</p>}
            
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500 transition-colors duration-300"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </button>
          </form>
          
          {/* --- 9. Add a link to the Signup Page (we'll create this next) --- */}
          <p className="text-sm text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-teal-400 hover:text-teal-300">
              Sign Up
            </Link>
          </p>

          <div className="relative flex items-center justify-center">
            {/* ... (Your "OR" divider) ... */}
          </div>

          <button
            type="button"
            onClick={() => setIsCalculatorOpen(true)}
            className="w-full flex justify-center items-center ..."
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