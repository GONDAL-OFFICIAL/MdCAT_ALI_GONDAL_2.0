import React, { useEffect } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import { QuizProvider } from "./context/QuizContext";

import LoginPage from "./pages/LoginPage";

import SignupPage from "./pages/SignupPage";

import SubjectPage from "./pages/SubjectPage";

import ChapterPage from "./pages/ChapterPage";

import QuizSetupPage from "./pages/QuizSetupPage";

import QuizPage from "./pages/QuizPage";

import ResultPage from "./pages/ResultPage";

import CustomTestSetupPage from "./pages/CustomTestSetupPage";

import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./components/Layout";

import Leaderboard from "./pages/Leaderboard";

const App: React.FC = () => {
  useEffect(() => {
    // Prevent right-click context menu to block "Inspect"

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    // Prevent keyboard shortcuts for opening developer tools

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12

      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
      }

      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C

      if (
        e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" ||
          e.keyCode === 73 ||
          e.key === "J" ||
          e.keyCode === 74 ||
          e.key === "C" ||
          e.keyCode === 67)
      ) {
        e.preventDefault();
      }

      // Ctrl+U for view source

      if (e.ctrlKey && (e.key === "U" || e.keyCode === 85)) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Anti-dev tools measure: the debugger statement pauses execution only when dev tools are open,

    // making inspection and debugging by the user very difficult.

    const antiDevTools = () => {
      debugger;
    };

    const intervalId = setInterval(antiDevTools, 1000);

    // Cleanup function to remove event listeners and interval when the component unmounts

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);

      document.removeEventListener("keydown", handleKeyDown);

      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this runs only once when the app mounts

  return (
    <QuizProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route
              path="/subjects"
              element={
                <ProtectedRoute>
                  <SubjectPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/chapters/:subject"
              element={
                <ProtectedRoute>
                  <ChapterPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/setup/:subject/:chapter"
              element={
                <ProtectedRoute>
                  <QuizSetupPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/custom-setup"
              element={
                <ProtectedRoute>
                  <CustomTestSetupPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  <QuizPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/results"
              element={
                <ProtectedRoute>
                  <ResultPage />
                </ProtectedRoute>
              }
            />

            {/* ✅ NEW LEADERBOARD ROUTE */}
            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute>
                  <Leaderboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </HashRouter>
    </QuizProvider>
  );
};

export default App;
