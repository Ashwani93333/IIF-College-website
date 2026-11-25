import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, hasRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  if (allowedRoles && !hasRole(allowedRoles)) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--danger-red)' }}>
        <h2>Access Restricted</h2>
        <p>Your current administrative role does not have authorization to view this section.</p>
      </div>
    );
  }

  return children;
}
