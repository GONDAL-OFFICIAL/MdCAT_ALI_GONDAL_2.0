
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useContext(QuizContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
