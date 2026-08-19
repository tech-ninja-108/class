import React, { useContext } from "react";
import { Mycontext } from "../context/Mycontex";
import { Navigate, Outlet } from "react-router";

const Protacted = () => {
  const { isLogined } = useContext(Mycontext);
  if (!isLogined) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Protacted;
