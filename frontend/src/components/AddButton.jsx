import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function AddButton({ openPopup }) {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden  hover:bg-zinc-900/80 cursor-pointer"
      onClick={openPopup}
    >
      <span className="flex items-center justify-center absolute inset-0">
        <IoAddOutline size={48} color="#393940" />
      </span>
    </motion.div>
  );
}

export default AddButton;
