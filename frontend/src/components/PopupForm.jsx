import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CardAtom } from "../store/atoms/CardAtom";
import axios from "axios";

function PopupForm({ closePopup }) {
  const [description, setDescription] = useState("");
  const [filesize, setFilesize] = useState("");
  const [close, setClose] = useState(false);
  const [tagTitle, setTagTitle] = useState("");
  const [tagColor, setTagColor] = useState("green");
  const [isOpen, setIsOpen] = useState(false);
  const setCard = useSetRecoilState(CardAtom);
  const card = useRecoilValue(CardAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tag = { tagTitle, tagColor, isOpen };
    const response = await axios.post("http://localhost:3000/card/", {
      description,
      filesize,
      close,
      tag,
    });
    console.log("Response data: ", response.data.result);
    setCard((oldCard) => [...oldCard, response.data.result]);
    console.log("Card data:", card);

    closePopup();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        className="absolute z-10 w-full h-screen top-0 left-0 bg-zinc-900/10 backdrop-blur-lg text-white"
      >
        <button
          onClick={closePopup}
          className="mx-10 my-10 p-2 bg-white text-black rounded"
        >
          Close
        </button>
        <div className="bg-opacity-90 text-white p-6 rounded-lg flex justify-center items-center">
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
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
                onChange={(e) => setFilesize(e.target.value)}
                value={filesize}
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
                onChange={(e) => setTagTitle(e.target.value)}
                value={tagTitle}
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
                onChange={(e) => setTagColor(e.target.value)}
                value={tagColor}
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
                  onChange={(e) => setIsOpen(e.target.checked)}
                  checked={isOpen}
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
                  onChange={(e) => setClose(e.target.checked)}
                  checked={close}
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
