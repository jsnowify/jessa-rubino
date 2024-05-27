import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { AboutMe } from "./components/AboutMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errElement: <div>Error</div>,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
