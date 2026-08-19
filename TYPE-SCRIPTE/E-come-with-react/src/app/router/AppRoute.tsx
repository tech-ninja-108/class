import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Login from "../../feature/auth/ui/pages/Login";
import Register from "../../feature/auth/ui/pages/Register";
import { useEffect } from "react";
import { authMe } from "../../feature/auth/state/authAction";
import { useAppDispatch } from "../../feature/auth/hooks/reduxHooks";
import AuthProtected from "./AuthProtected";
import Protected from "./userProtected";
import Home from "../../feature/products/ui/pages/Home";
import Layout from "../../layout/Layout";
import Shop from "../../feature/shop/ui/pages/shop";
import Cart from "../../feature/cart/ui/pages/Cart";
import ProductPageUI from "../../feature/singlePage/ui/pages/ProductPageUI";

const AppRoute = () => {
  const dispacth = useAppDispatch();
  useEffect(() => {
    dispacth(authMe());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/login"} replace />,
    },
    {
      element: <AuthProtected />,
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
      element: <Protected />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/products",
              element: <Shop />,
            },
            {
              path: "/product/:id",
              element: <ProductPageUI />,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;
