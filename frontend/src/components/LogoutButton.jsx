import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function LogoutButton() {
  const { dispatch, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log("Error Message:", error.message);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-700 text-white py-10 px-8 overflow-hidden  hover:bg-zinc-900/90 cursor-pointer"
    >
      <span
        className="flex items-center justify-center absolute inset-0"
        onClick={user ? handleLogout : handleRegister}
      >
        <h1 className="text-3xl">{user ? "Logout" : "Login"}</h1>
      </span>
    </div>
  );
}

export default LogoutButton;
