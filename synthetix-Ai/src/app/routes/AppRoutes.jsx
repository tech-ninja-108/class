import React, { useEffect } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Login from "../../feature/auth/ui/pages/Login";
import Register from "../../feature/auth/ui/pages/Register";
import AuthLayout from "../layout/AuthLayout";
import DashBoardLayout from "../layout/DashBoardLayout";
import Home from "../../feature/dashboard/ui/pages/Home";
import { useDispatch } from "react-redux";
import { currentuser } from "../../feature/auth/state/auth/actionRedux";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentuser());
  }, [dispatch]);

  const route = createBrowserRouter([
    {
      path: "",
      element: <Navigate to={"/login"} replace />,
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      element: <DashBoardLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default AppRoutes;
