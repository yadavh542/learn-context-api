import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { replace: true });
    }
    console.log(user, "user");
  }, [user]);

  return children;
};

export default ProtectedRoute;
