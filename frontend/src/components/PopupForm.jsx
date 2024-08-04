import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function PopupForm({ closePopup }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        className="absolute z-10 w-full h-screen top-0 left-0 bg-zinc-900/10 backdrop-blur-lg text-white"
      >
        <button
          onClick={closePopup}
          className="mx-10 my-10 p-2 bg-white text-black rounded"
        >
          close
        </button>
        <div className="bg-opacity-90 text-white p-6 rounded-lg flex justify-center items-center ">
          <form>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                type="text"
                className="shadow appearance-none w-96 border-zinc-600 border rounded bg-transparent py-2 px-3 text-white leading-tight focus:border-2 focus:outline-none focus:border-zinc-400"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="filesize"
              >
                File Size
              </label>
              <input
                id="filesize"
                name="filesize"
                type="text"
                className="shadow appearance-none w-96 border-zinc-600 border rounded py-2 bg-transparent px-3 text-white leading-tight focus:border-2 focus:outline-none focus:border-zinc-400"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="tagTitle"
              >
                Tag Title
              </label>
              <input
                id="tagTitle"
                name="tagTitle"
                type="text"
                className="shadow appearance-none w-96 border-zinc-600 border rounded bg-transparent py-2 px-3 text-white leading-tight focus:border-2 focus:outline-none focus:border-zinc-400"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="tagColor"
              >
                Tag Color
              </label>
              <select
                id="tagColor"
                name="tagColor"
                className="shadow appearance-none w-96 border-zinc-600 border rounded bg-transparent py-2 px-3 text-slate-200 leading-tight focus:border-2 focus:outline-none focus:border-zinc-400"
              >
                <option value="green" className="text-slate-200 bg-zinc-800">
                  Green
                </option>
                <option value="red" className="text-slate-200 bg-zinc-800">
                  Red
                </option>
                <option value="blue" className="text-slate-200 bg-zinc-800">
                  Blue
                </option>
                <option value="yellow" className="text-slate-200 bg-zinc-800">
                  Yellow
                </option>
              </select>
            </div>

            <div className="flex items-center gap-5 justify-between">
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="isOpen"
                >
                  Is Open
                </label>
                <input
                  id="isOpen"
                  name="isOpen"
                  type="checkbox"
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Open Tag</span>
              </div>

              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="close"
                >
                  Close
                </label>
                <input
                  id="close"
                  name="close"
                  type="checkbox"
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Close Button</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-slate-100 hover:bg-slate-300 text-black font-semibold py-2 px-4 rounded focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PopupForm;
