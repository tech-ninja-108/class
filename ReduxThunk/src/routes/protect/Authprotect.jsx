import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Loading from "../../shared/ui/pages/Loading";

const Authprotect = () => {
  const { isLoading, isLogind } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Loading />;
  }
  if (isLogind) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default Authprotect;
