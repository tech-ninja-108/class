import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Authprotect from "./protect/Authprotect";
import Login from "../feature/auth/ui/pages/Login";
import Register from "../feature/auth/ui/pages/Register";
import Mainprotect from "./protect/Mainprotect";
import Home from "../shared/ui/pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydred } from "../feature/auth/state/thunkAction";
import Mainlayout from "../layout/Mainlayout";
import ProductPages from "../feature/products/ui/pages/ProductPages";
import About from "../shared/ui/pages/About";
const AppAuthRout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydred());
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Authprotect />,
      children: [
        {
          index: true,
          element: <Navigate to={"/login"} replace />,
        },
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
      path: "/main",
      element: <Mainprotect />,
      children: [
        {
          path: "",
          element: <Mainlayout />,
          children: [
            {
              index: true,
              element: <Navigate to={"home"} />,
            },
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "product",
              element: <ProductPages />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppAuthRout;
