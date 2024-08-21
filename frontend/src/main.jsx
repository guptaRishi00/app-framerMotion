import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  { path: "/register", element: <Login /> },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
