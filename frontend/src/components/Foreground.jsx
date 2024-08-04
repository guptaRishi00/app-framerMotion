import React, { useRef, useState } from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import PopupForm from "./PopupForm";

function Foreground() {
  const ref = useRef(null);
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".45mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".45mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".45mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 w-full h-full z-[3] flex flex-wrap p-5 gap-10"
      >
        {data.map((item, index) => (
          <Card data={item} key={index} refrence={ref} />
        ))}
        <AddButton openPopup={openPopup} />
        {popup && <PopupForm closePopup={closePopup} />}
      </div>
    </>
  );
}

export default Foreground;
