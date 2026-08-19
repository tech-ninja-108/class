import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { addUsers } from "../features/usersSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/main",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const Approuter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("loginedUser");

      if (!savedUser) {
        return;
      }

      const data = JSON.parse(savedUser);
      dispatch(addUsers(data));
    } catch (error) {
      console.log("User hydration error:", error);
      localStorage.removeItem("loginedUser");
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default Approuter;
