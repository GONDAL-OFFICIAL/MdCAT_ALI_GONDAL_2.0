// src/pages/Leaderboard.tsx

import React from 'react';
// --- THIS IS THE FIX (Problem 1) ---
// This path assumes firebaseConfig.ts is in your 'src' folder
import { db } from '../firebaseConfig'; // Import the Firestore database

// --- 2. Import all necessary types from firestore ---
import {
  collection,
  query,
  orderBy,
  limit,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// --- 3. Import navigation hooks and icon ---
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// 4. Define your type
type LeaderboardEntry = {
  id: string;
  username: string;
  overallPercentage: number;
  totalCorrect: number;
  totalAttempted: number;
};

// --- 5. Create the FirestoreDataConverter ---
const leaderboardEntryConverter = {
  toFirestore(entry: LeaderboardEntry): DocumentData {
    return {
      username: entry.username,
      overallPercentage: entry.overallPercentage,
      totalCorrect: entry.totalCorrect,
      totalAttempted: entry.totalAttempted,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): LeaderboardEntry {
    const data = snapshot.data(options)!;
    return {
      id: snapshot.id, 
      username: data.username,
      overallPercentage: data.overallPercentage,
      totalCorrect: data.totalCorrect,
      totalAttempted: data.totalAttempted,
    };
  }
};

const Leaderboard: React.FC = () => {
  // --- 6. Initialize navigate ---
  const navigate = useNavigate();

  // --- 7. Create a typed collection reference using the converter ---
  const statsCollectionRef = collection(db, 'userStats')
    .withConverter(leaderboardEntryConverter);
  
  // 8. Create the query
  const q = query(
    statsCollectionRef, 
    orderBy('overallPercentage', 'desc'), 
    limit(20)
  );

  // --- 9. Use the hook ---
  const [leaderboard, loading, error] = useCollectionData(q);

  if (loading) {
    return <div className="text-white text-center p-10">Loading Leaderboard...</div>;
  }

  if (error) {
    console.error("Error fetching leaderboard: ", error);
    return (
      <div className="max-w-3xl mx-auto p-4 md:p-8 text-white">
        {/* Back Button for errors */}
        <button
          onClick={() => navigate('/subjects')}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Subjects
        </button>
        <h2 className="text-red-400 text-center">Failed to load leaderboard.</h2>
        <p className="text-gray-400 text-center mt-4">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 text-white">

      {/* --- HERE IS YOUR NEW BACK BUTTON --- */}
      <button
        onClick={() => navigate('/subjects')} 
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Subjects
      </button>

      <h2 className="text-4xl font-bold text-teal-400 mb-8 text-center">🏆 Leaderboard 🏆</h2>
      
      <ol className="list-decimal list-inside space-y-4">
        
        {leaderboard && leaderboard.length === 0 && (
          <p className="text-gray-400 text-center">
            The leaderboard is empty. Take a quiz to get your score!
          </p>
        )}

        {leaderboard && leaderboard.map((user, index) => {
          let rankClass = "text-gray-400";
          if (index === 0) rankClass = "text-yellow-400"; // 1st
          if (index === 1) rankClass = "text-gray-300";   // 2nd
          if (index === 2) rankClass = "text-yellow-600"; // 3rd

          return (
            <li key={user.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <span className={`text-2xl font-bold w-8 text-center ${rankClass}`}>
                  {index + 1}
                </span>
                <span className="text-xl font-medium">{user.username}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-teal-400">{user.overallPercentage.toFixed(2)}%</span>
                <p className="text-xs text-gray-500">{user.totalCorrect} / {user.totalAttempted} Correct</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Leaderboard;

