import React, { useEffect } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AuthProtected from "./protected/AuthProtected";
import LoginPage from "../feature/auth/ui/pages/LoginPage";
import RegisterPage from "../feature/auth/ui/pages/RegisterPage";
import MainProtected from "./protected/MainProtected";
import Home from "../shared/Home";
import instance from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { addUser, stopLoading } from "../feature/auth/State/authSlice";
import MainLayout from "../Layout/MainLayout";

const Approut = () => {
  const dishpatch = useDispatch();
  const hypernate = async () => {
    const Token = localStorage.getItem("accessToken");
    if (!Token) {
      dishpatch(stopLoading());
    }
    try {
      const result = await instance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${Token}`, // Pass JWT via Authorization header
        },
        credentials: "include",
      });
      dishpatch(addUser(result.data));
    } catch (err) {
      console.log(err);
      dishpatch(stopLoading());
    }
  };

  useEffect(() => {
    hypernate();
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      element: <AuthProtected />,
      children: [
        {
          index: true,
          element: <Navigate to={"/login"} replace />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approut;
