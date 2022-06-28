import { createContext, useReducer } from "react";
import lotrAlertReducer from "./LotrAlertReducer";

const LotrAlertContext = createContext();

export const LotrAlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(lotrAlertReducer, initialState);

  //Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 2000);
  };

  return (
    <LotrAlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </LotrAlertContext.Provider>
  );
};

export default LotrAlertContext;
