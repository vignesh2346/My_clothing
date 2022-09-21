// import { createContext, useState, useReducer } from "react";
// import SHOP_DATA from "../shop-data";

// export const ProductContext = createContext({
//   product: SHOP_DATA,
//   setProduct: () => {},
// });

// const productReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "Set-Product":
//       return {
//         ...state,
//         product: payload,
//       };
//     default:
//       throw Error(`Unhandled type ${type}`);
//   }
// };

// const initialState = {
//   product: SHOP_DATA,
// };
// export const ProductProvider = ({ children }) => {
//   // const [product, setProduct] = useState(SHOP_DATA);
//   const [state, dispatch] = useReducer(productReducer, initialState);
//   const { product } = state;
//   const setProduct = (product) => {
//     dispatch({ type: "Set-Product", payload: product });
//   };

//   const value = { product, setProduct };
//   return (
//     <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
//   );
// };
