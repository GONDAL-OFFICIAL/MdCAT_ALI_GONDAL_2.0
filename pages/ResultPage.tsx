import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { CheckCircle, XCircle, Clock, Percent, Hash, Repeat, FileText, Home, Bookmark, Star, ArrowLeft } from 'lucide-react';

// --- NEW CODE: Import Firebase services ---
import { auth, db } from '../firebaseConfig'; // Import auth and db
import { doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const ResultPage: React.FC = () => {
  const { quizAttempts, startTime, endTime, startNewTest, startRetake, retakeFullQuiz, bookmarkedQuestions, startBookmarkedQuiz, startWrongAndBookmarkedQuiz, currentSubject } = useContext(QuizContext);
  const navigate = useNavigate();

  // --- NEW CODE: Get the currently logged-in user ---
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (quizAttempts.length === 0 || !startTime || !endTime) {
      navigate('/subjects');
    }
    // --- MODIFIED CODE: Added all dependencies ---
  }, [quizAttempts, startTime, endTime, navigate]); 

  if (quizAttempts.length === 0 || !startTime || !endTime) {
    return null;
  }

  const correctAnswers = quizAttempts.filter(attempt => attempt.isCorrect).length;
  const totalQuestions = quizAttempts.length;
  const scorePercentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
  const timeTaken = Math.round((endTime - startTime) / 1000);
  
  const incorrectQuestionsCount = quizAttempts.filter(attempt => !attempt.isCorrect).length;
  const bookmarkedCount = bookmarkedQuestions.length;
  const combinedUniqueCount = new Set([
    ...quizAttempts.filter(a => !a.isCorrect).map(a => a.question.question),
    ...bookmarkedQuestions.map(q => q.question)
  ]).size;

  // --- NEW CODE: useEffect to Save Results to Firebase ---
  useEffect(() => {
    // Only run if:
    // 1. We are not loading the user's auth state
    // 2. A user is logged in (user object exists)
    // 3. There are valid results to save (totalQuestions > 0)
    if (!loading && user && totalQuestions > 0 && startTime && endTime) {
      
      const saveResults = async () => {
        // Get a reference to THIS user's document in the 'userStats' collection
        // The document ID is their unique user.uid
        const userStatRef = doc(db, 'userStats', user.uid);

        try {
          // A transaction is the safest way to update data
          // It reads the data and writes the new data in one "atomic" operation
          await runTransaction(db, async (transaction) => {
            const userDoc = await transaction.get(userStatRef);

            if (!userDoc.exists()) {
              // This should not happen if they signed up correctly.
              // This is a safety check.
              console.error("User doc doesn't exist! Cannot save score.");
              return;
            }

            // --- User exists, update their stats ---
            const oldStats = userDoc.data();
            
            const newTotalCorrect = oldStats.totalCorrect + correctAnswers;
            const newTotalAttempted = oldStats.totalAttempted + totalQuestions;
            
            // Calculate new percentage, avoid division by zero
            const newPercentage = newTotalAttempted > 0 
              ? (newTotalCorrect / newTotalAttempted) * 100 
              : 0;

            transaction.update(userStatRef, {
              totalCorrect: newTotalCorrect,
              totalAttempted: newTotalAttempted,
              overallPercentage: newPercentage,
              lastTestTaken: serverTimestamp() // Update their "last active" time
            });
          });

          console.log("User stats updated successfully!");

        } catch (e) {
          console.error("Transaction to save score failed: ", e);
        }
      };

      saveResults();
    }
    
    // This effect runs only when these values are finalized
  }, [user, loading, correctAnswers, totalQuestions, startTime, endTime]);
  // --- END OF NEW CODE ---

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 animate-fadeIn space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold text-teal-400">Quiz Results</h2>
        <button
          onClick={() => navigate('/subjects')}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Subjects
        </button>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <CheckCircle className="w-12 h-12 text-green-500"/>
            <div>
                <p className="text-gray-400">Correct</p>
                <p className="text-2xl font-bold">{correctAnswers}</p>
            </div>
        </div>
         <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Hash className="w-12 h-12 text-gray-400"/>
            <div>
                <p className="text-gray-400">Total</p>
                <p className="text-2xl font-bold">{totalQuestions}</p>
            </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Percent className="w-12 h-12 text-teal-400"/>
            <div>
                <p className="text-gray-400">Score</p>
                <p className="text-2xl font-bold">{scorePercentage.toFixed(2)}%</p>
            </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Clock className="w-12 h-12 text-yellow-500"/>
            <div>
                <p className="text-gray-400">Time Taken</p>
                <p className="text-2xl font-bold">{timeTaken}s</p>
            </div>
        </div>
      </div>

      {/* Action Buttons */}
       <div className="flex flex-wrap justify-center gap-4 py-6">
        <button
          onClick={() => { startNewTest(); navigate('/subjects'); }}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2" />
          New Subject
        </button>
        <button
          onClick={() => { if (currentSubject) navigate(`/chapters/${currentSubject}`); }}
          disabled={!currentSubject}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Chapters
        </button>
        <button
          onClick={() => { startRetake(); navigate('/quiz'); }}
          disabled={incorrectQuestionsCount === 0}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <Repeat className="w-5 h-5 mr-2" />
          Retake Incorrect ({incorrectQuestionsCount})
        </button>
        <button
          onClick={() => { startBookmarkedQuiz(); navigate('/quiz'); }}
          disabled={bookmarkedCount === 0}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <Bookmark className="w-5 h-5 mr-2" />
          Test Bookmarked ({bookmarkedCount})
        </button>
        <button
          onClick={() => { startWrongAndBookmarkedQuiz(); navigate('/quiz'); }}
          disabled={combinedUniqueCount === 0}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          <Star className="w-5 h-5 mr-2" />
          Test Wrong & Bookmarked ({combinedUniqueCount})
        </button>
        <button
          onClick={() => { retakeFullQuiz(); navigate('/quiz'); }}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-all transform hover:scale-105"
        >
          <FileText className="w-5 h-5 mr-2" />
          Retake Full Test
        </button>
      </div>


      {/* Detailed Review */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300">Review Your Answers</h3>
        {quizAttempts.map((attempt, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${attempt.isCorrect ? 'bg-green-900/50 border-l-4 border-green-500' : 'bg-red-900/50 border-l-4 border-red-500'}`}>
            <p className="font-semibold text-lg text-white mb-2">Q{index + 1}: {attempt.question.question}</p>
            <div className="space-y-2 mt-4 text-sm">
                {attempt.question.options.map(option => {
                    const isCorrect = option === attempt.question.correctAnswer;
                    const isUserChoice = option === attempt.userAnswer;
                    let optionClass = "border-gray-600";
                    if (isCorrect) optionClass = "bg-green-800/50 border-green-500";
                    if (isUserChoice && !isCorrect) optionClass = "bg-red-800/5G-P6S14Y3KRC0 border-red-500";
                    
                    return (
                         <div key={option} className={`p-3 border rounded-md ${optionClass} flex items-center`}>
                           {isCorrect && <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />}
                           {isUserChoice && !isCorrect && <XCircle className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />}
                           <span className="text-gray-200">{option}</span>
                         </div>
                    )
                })}
            </div>
            <p className={`mt-3 text-xs ${attempt.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                Your answer: <span className="font-bold">{attempt.userAnswer || 'Not Answered'}</span>. 
                {!attempt.isCorrect && <> Correct answer: <span className="font-bold">{attempt.question.correctAnswer}</span></>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;