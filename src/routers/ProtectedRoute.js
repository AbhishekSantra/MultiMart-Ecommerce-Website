import useAuth from "../custom-hooks/useAuth"
import { Navigate,Outlet } from "react-router-dom"
const ProtectedRoute = () => {
  const {currentUser}=useAuth();
  return currentUser?<Outlet/>:<Navigate to="/login"/>
}

export default ProtectedRoute