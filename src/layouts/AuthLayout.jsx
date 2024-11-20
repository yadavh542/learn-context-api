import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const AuthLayout = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
