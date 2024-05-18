import React, { ReactNode } from 'react';
import ProtectedRoute from './ProtectedRoute';
import { logger } from '@/helpers/logger';

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const protectedRoutes = [
    "/dashboard",
    "/ecommerce",
  ];
  logger.log("ProtectedRoutes");

  return (
    <>
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
    </>
  );
};

export default ProtectedRoutes;