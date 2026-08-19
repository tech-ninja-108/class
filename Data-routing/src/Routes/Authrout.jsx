import React, { useContext } from "react";
import { Mycontext } from "../context/Mycontex";
import { Navigate, Outlet } from "react-router";

const Authrout = () => {
  const { isLogined } = useContext(Mycontext);
  console.log(isLogined);

  if (isLogined) {
    return <Navigate to="/main" replace />;
  }
  return <Outlet />;
};

export default Authrout;
