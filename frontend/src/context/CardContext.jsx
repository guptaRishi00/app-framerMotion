import React, { createContext, useEffect, useReducer } from "react";

// Create the context
export const CardContext = createContext();

// Define the reducer function
const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return { ...state, card: [action.payload, ...state.card] };
    case "SET_CARD":
      return { card: action.payload };
    default:
      return state;
  }
};

// Create the context provider component
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, {
    card: null,
  });

  console.log("CardContext:", state.card);

  return (
    <CardContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
