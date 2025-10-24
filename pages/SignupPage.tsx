// src/pages/SignupPage.tsx

import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

// --- 1. Import Firebase Auth AND Firestore ---
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig'; // Import both auth and db

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // We need their display name
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (username.trim() === '') {
      setError('Please enter a username.');
      return;
    }

    try {
      // --- 2. Create the user in Firebase Auth ---
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // --- 3. IMPORTANT: Create their doc in userStats ---
      // This is where we create their leaderboard entry
      const userStatRef = doc(db, 'userStats', newUser.uid);
      await setDoc(userStatRef, {
        username: username, // Save the username they entered
        totalCorrect: 0,
        totalAttempted: 0,
        overallPercentage: 0,
        lastTestTaken: serverTimestamp() // Good to know when they joined
      });
      
      // On success, useAuthState will update and the useEffect below will redirect
      
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This email address is already in use.');
      } else {
        setError('Failed to create an account. Please try again.');
      }
    }
  };

  // Redirect if user is logged in (or on signup success)
  useEffect(() => {
    if (user) {
      navigate('/subjects');
    }
  }, [user, navigate]);

  if (loading) {
    return <div className="text-white text-center p-10">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-140px)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-teal-400">Create Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-300 sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Username (e.g., Ali)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300 sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" aria-label="Password" className="text-sm font-medium text-gray-300 sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Password (min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {error && <p className="text-sm text-red-400 text-center">{error}</p>}
          
          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-teal-400 hover:text-teal-300">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;