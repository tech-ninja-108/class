import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App";
import Login from "../pages/Login";
import Authrout from "./Authrout";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Protacted from "./Protacted";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Authrout />,
    children: [
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
    element: <Protacted />,
    children: [
      {
        path: "",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "project",
            element: <Projects />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

export default Router;
