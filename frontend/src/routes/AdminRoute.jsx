import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  // Abhi backend nahi hai
  // Isliye sabko access de rahe hain

  return children;

}

export default AdminRoute;