import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { currentUser, userProfile, authLoading } = useAuth();

  if (authLoading) {
    return <div className="flex items-center justify-center h-screen text-slate-300">Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userProfile?.role !== requiredRole) {
    return <Navigate to="/knowledge-hub" replace />;
  }

  return children;
}
