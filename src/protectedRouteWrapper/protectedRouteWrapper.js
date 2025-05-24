import React from "react";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRouteWrapper = ({children}) => {
  const [isAutbhenticated, setIsAuthenticated] = useState(false);
  return isAutbhenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouteWrapper;
