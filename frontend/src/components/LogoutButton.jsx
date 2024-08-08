import React, { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

function LogoutButton() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("user", "");
  };

  return (
    <div
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-700 text-white py-10 px-8 overflow-hidden  hover:bg-zinc-900/90 cursor-pointer"
      onClick={handleLogout}
    >
      <span className="flex items-center justify-center absolute inset-0">
        <h1 className="text-3xl">Logout</h1>
      </span>
    </div>
  );
}

export default LogoutButton;
