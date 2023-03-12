// Following the article https://blog.logrocket.com/react-hooks-context-redux-state-management/

import React, { createContext, useReducer } from "react";
import initialGameState from "./gamestate.js";

const initialState = { ...initialGameState };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "action1":
        const newState = {}; // do something with the state
        return newState;
      default:
        throw new Error(`Unknown action ${action.type}`);
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, store };
