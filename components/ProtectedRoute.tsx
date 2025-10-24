import React from 'react';
import { Navigate } from 'react-router-dom';

// --- 1. Import Firebase auth ---
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig'; // Adjust path if needed

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // --- 2. Use the Firebase auth hook, not QuizContext ---
  const [user, loading] = useAuthState(auth);

  // --- 3. Handle the "loading" state (THIS IS THE FIX) ---
  // While Firebase is checking if you are logged in, show a loading screen.
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-140px)]">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  // --- 4. Handle the "not logged in" state ---
  // If loading is done and there is no user, redirect to login.
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // --- 5. Handle the "logged in" state ---
  // If loading is done and there is a user, show the page.
  return <>{children}</>;
};

export default ProtectedRoute;