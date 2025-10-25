// firebaseConfig.ts

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // We don't need this

// --- 1. ADD THESE TWO IMPORTS ---
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVGQdk67FKQbHFOKlYLHO9T5yo4JbmL0U",
  authDomain: "quiz---leaderboard.firebaseapp.com",
  projectId: "quiz---leaderboard",
  storageBucket: "quiz---leaderboard.firebasestorage.app",
  messagingSenderId: "18276888463",
  appId: "1:18276888463:web:dbf018558fb5096583a5fa",
  measurementId: "G-P6S14Y3KRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // We don't need this either

// --- 2. ADD THESE TWO EXPORT LINES ---
export const auth = getAuth(app);
export const db = getFirestore(app);