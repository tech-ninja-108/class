import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import Router from "./Routes/Approute.jsx";
import { ContextProvider } from "./context/Mycontex.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={Router} />,
  </ContextProvider>,
);
