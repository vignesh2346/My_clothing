import SHOP_DATA from "../../shop-data";

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Set-Product":
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};

const initialState = {
  product: SHOP_DATA,
};
