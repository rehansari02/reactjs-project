import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";

function AlreadyExists({ children }) {
  const { token } = useAuth();
  return !token ? children : <Navigate to="/" replace />;
}

export default AlreadyExists;
