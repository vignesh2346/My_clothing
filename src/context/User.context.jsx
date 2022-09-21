// import { createContext, useState, useEffect, useReducer } from "react";
// // import { onAuthStateChangedListener } from "../Utils/Firebase/Firebase";

// export const Usercontext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// const userReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "set-user-context":
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw Error(`unhandled type ${type}`);
//   }
// };

// const Initial_state = {
//   currentUser: null,
// };
// export const Userprovider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(null);

//   const [state, dispatch] = useReducer(userReducer, Initial_state);
//   const { currentUser } = state;
//   // const setCurrentUser = (user) => {
//   //   dispatch({ type: "set-user-context", payload: user });
//   // };

//   const value = { currentUser, setCurrentUser };

//   return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>;
// };
