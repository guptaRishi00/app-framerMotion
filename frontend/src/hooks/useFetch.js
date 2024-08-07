import { useEffect, useState } from "react";
import axios from "axios";
import { useCardContext } from "./useCardContext";

export const cardsOperations = (initialUrl) => {
  const { dispatch } = useCardContext();
  const [data, setData] = useState([]);

  //GET ALL Cards
  const getAllCards = async () => {
    try {
      const response = await axios.get(initialUrl);
      const cards = response.data?.card;
      dispatch({ type: "SET_CARD", payload: cards });
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  //POST A Card
  const postACard = async (card) => {
    try {
      const response = await axios.post(initialUrl, card);
      dispatch({ type: "ADD_CARD", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);
  return { data, getAllCards, postACard };
};
