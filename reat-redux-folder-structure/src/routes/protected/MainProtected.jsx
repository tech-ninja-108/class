import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const { user, isLoding } = useSelector((state) => state.auth);
  if (isLoding) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default MainProtected;
