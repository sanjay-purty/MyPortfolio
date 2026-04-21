import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/" replace />;
}
