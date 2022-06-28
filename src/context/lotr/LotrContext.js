import { createContext, useReducer } from "react";
import lotrReducer from "./LotrReducer";

const LotrContext = createContext();

export const LotrProvider = ({ children }) => {
  const initialState = {
    loading: false,
    allbooks: [],
    book: [],
    movies: [],
    movie: {},
    character: [],
    characters: {},
    quotes: {},
    quote: {},
    inputValue: "",
  };
  const [state, dispatch] = useReducer(lotrReducer, initialState);

  return (
    <LotrContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </LotrContext.Provider>
  );
};

export default LotrContext;
