import { createContext, useState, useReducer } from "react";

export const IconContext = createContext({
  click: false,
  setClick: () => null,
});

const iconReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Icon-toggle":
      return {
        ...state,
        click: payload,
      };
    default:
      throw Error(`Unhandled type ${type}`);
  }
};

const initialState = {
  click: false,
};

export const IconProvider = ({ children }) => {
  // const [click, setClick] = useState(false);
  const [state, dispatch] = useReducer(iconReducer, initialState);
  const { click } = state;
  const setClick = (Icon) => {
    dispatch({ type: "Icon-toggle", payload: Icon });
  };
  const value = { click, setClick };
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};
