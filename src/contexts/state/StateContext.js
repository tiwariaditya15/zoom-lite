import { createContext, useContext, useReducer } from "react";
import { participants } from "../../data/participants";
import { stateReducer } from "./stateReducer";

const StateContext = createContext();

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, { participants });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(StateContext);
}
