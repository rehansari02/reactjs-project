import { Navigate } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";

function ProtectedRoute({ children }) {
  const { token } = useAuth(); // Auth context se token lo

  return token ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
