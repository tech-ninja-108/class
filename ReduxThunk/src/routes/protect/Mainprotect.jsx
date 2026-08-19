import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Loading from "../../shared/ui/pages/Loading";

const Mainprotect = () => {
  const { isLoading, isLogind } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Loading />;
  }
  if (!isLogind) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default Mainprotect;
