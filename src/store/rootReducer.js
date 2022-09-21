import { combineReducers } from "redux";
import { userReducer } from "./User/userReducer";
import { productReducer } from "./product/productReducer";
import { cartReducer } from "./Cart/cartReducer";
import { iconReducer } from "./icon/iconReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  icon: iconReducer,
});
