import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import PopupForm from "./PopupForm";
import axios from "axios";
import { useCardContext } from "../hooks/useCardContext";

function Foreground() {
  const ref = useRef(null);

  const [popup, setPopup] = useState(false);

  const { card, dispatch } = useCardContext();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/card/");
        dispatch({ type: "SET_CARD", payload: response.data.card });
        console.log(response.data.card);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCards();
  }, []);

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 w-full h-full z-[3] flex flex-wrap p-5 gap-10"
      >
        {card &&
          card.map((item, index) => (
            <Card data={item} key={index} refrence={ref} />
          ))}
        <AddButton openPopup={openPopup} />
        {popup && <PopupForm closePopup={closePopup} />}
      </div>
    </>
  );
}

export default Foreground;
