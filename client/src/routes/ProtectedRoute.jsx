import { useAuth } from "../context/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "../components/material/Loading.jsx";
function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  if (loading) return <Loading />;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoute;
