// import { createContext, useState, useReducer } from "react";

// export const CartItemContext = createContext({
//   item: [],
//   setItem: () => {},
// });

// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "Cart-add-item":
//       return {
//         ...state,
//         item: payload,
//       };
//     default:
//       throw Error(`unhandled type ${type}`);
//   }
// };
// const initialState = {
//   item: [],
// };

// export const CartItemProvider = ({ children }) => {
//   // const [item, setItem] = useState([]);
//   const [state, dispatch] = useReducer(cartReducer, initialState);
//   const { item } = state;
//   const setItem = (item) => {
//     dispatch({ type: "Cart-add-item", payload: item });
//   };
//   const value = { item, setItem };
//   return (
//     <CartItemContext.Provider value={value}>
//       {children}
//     </CartItemContext.Provider>
//   );
// };
