
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import LoginPage from './pages/LoginPage';
import SubjectPage from './pages/SubjectPage';
import ChapterPage from './pages/ChapterPage';
import QuizSetupPage from './pages/QuizSetupPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import CustomTestSetupPage from './pages/CustomTestSetupPage';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <QuizProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/subjects" element={<ProtectedRoute><SubjectPage /></ProtectedRoute>} />
            <Route path="/chapters/:subject" element={<ProtectedRoute><ChapterPage /></ProtectedRoute>} />
            <Route path="/setup/:subject/:chapter" element={<ProtectedRoute><QuizSetupPage /></ProtectedRoute>} />
            <Route path="/custom-setup" element={<ProtectedRoute><CustomTestSetupPage /></ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
            <Route path="/results" element={<ProtectedRoute><ResultPage /></ProtectedRoute>} />
          </Routes>
        </Layout>
      </HashRouter>
    </QuizProvider>
  );
};

export default App;
