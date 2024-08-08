import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CardProvider } from "./context/CardContext.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CardProvider>
        <RouterProvider router={router} />
      </CardProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
