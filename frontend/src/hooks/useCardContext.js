import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw Error("useCardContext muxt be used insdie an CardContextProvider");
  }

  return context;
};

export { useCardContext };
