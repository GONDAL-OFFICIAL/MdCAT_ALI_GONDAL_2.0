import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, KeyRound } from 'lucide-react'; // Added KeyRound icon

// --- 1. Import more from firestore ---
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
  writeBatch
} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig'; // Assumes firebaseConfig is in 'src'

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  // --- 2. Add state for the invite code ---
  const [inviteCode, setInviteCode] = useState('');
  
  const [error, setError] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false); // Loading state
  const navigate = useNavigate();
  const [user, authLoading] = useAuthState(auth);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSigningUp(true); // Start loading

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setIsSigningUp(false);
      return;
    }
    if (username.trim() === '' || email.trim() === '' || inviteCode.trim() === '') {
      setError('Please fill in all fields.');
      setIsSigningUp(false);
      return;
    }

    try {
      // --- 3. Check the invite code *before* creating the user ---
      const codesRef = collection(db, 'inviteCodes');
      const q = query(
        codesRef,
        where('code', '==', inviteCode.trim()),
        where('isUsed', '==', false)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // No valid, unused code was found
        setError('Invalid or already used invite code.');
        setIsSigningUp(false);
        return;
      }

      // --- 4. A valid code was found! ---
      // We'll get the ID of the code document to mark it as "used"
      const codeDoc = querySnapshot.docs[0];

      // --- 5. Create the user in Firebase Auth ---
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // --- 6. Use a BATCH write to do two things at once ---
      // (Create userStats doc AND mark code as used)
      const batch = writeBatch(db);

      // Action 1: Create the user's stats document
      const userStatRef = doc(db, 'userStats', newUser.uid);
      batch.set(userStatRef, {
        username: username,
        totalCorrect: 0,
        totalAttempted: 0,
        overallPercentage: 0,
        lastTestTaken: serverTimestamp()
      });

      // Action 2: Mark the invite code as used
      const codeToUpdateRef = doc(db, 'inviteCodes', codeDoc.id);
      batch.update(codeToUpdateRef, { isUsed: true });

      // Action 3: Commit both actions to the database
      await batch.commit();

      // Success! useAuthState will now see the new user and redirect.
      
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This email address is already in use.');
      } else {
        setError('Failed to create an account. Please try again.');
      }
      setIsSigningUp(false); // Stop loading on error
    }
  };

  // Redirect if user is logged in
  useEffect(() => {
    if (user) {
      navigate('/subjects');
    }
  }, [user, navigate]);

  // Use the authLoading state from the hook
  if (authLoading) {
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
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md"
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
              required
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.Dtarget.value)}
            />
          </div>
          <div>
            <label htmlFor="password" aria-label="Password" className="text-sm font-medium text-gray-300 sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md"
              placeholder="Password (min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* --- 7. ADD THE INVITE CODE INPUT FIELD --- */}
          <div className="relative">
            <label htmlFor="invite-code" className="text-sm font-medium text-gray-300 sr-only">Invite Code</label>
            <input
              id="invite-code"
              name="invite-code"
              type="text"
              required
              className="w-full px-3 py-2 pl-10 text-white bg-gray-700 border border-gray-600 rounded-md"
              placeholder="Invite Code"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          {error && <p className="text-sm text-red-400 text-center">{error}</p>}
          
          <button
            type="submit"
            disabled={isSigningUp} // Disable button while loading
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 disabled:cursor-not-allowed"
          >
            {isSigningUp ? 'Verifying...' : (
              <>
                <UserPlus className="w-5 h-5 mr-2" />
                Sign Up
              </>
            )}
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
