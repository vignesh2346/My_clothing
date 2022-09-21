import "./cart-icon.styles.scss";
import { ReactComponent as Shopping } from "../assets/shopping-bag.svg";
import { useContext } from "react";
import { IconContext } from "../context/icon-context";
import { CartItemContext } from "../context/CartItem-context";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setItem } from "../store/Cart/cartAction";
import { useSelector } from "react-redux/es/exports";
import { setClick } from "../store/icon/iconAction";

const CartIcon = () => {
  // const { click, setClick } = useContext(IconContext);
  const click = useSelector((state) => {
    return state.icon.click;
  });
  const dispatch = useDispatch();
  const item = useSelector((state) => {
    return state.cart.item;
  });

  // const { item } = useContext(CartItemContext);
  const setter = () => {
    if (click === true) {
      dispatch(setClick(false));
    } else {
      dispatch(setClick(true));
    }
  };

  const Quant = () => {
    const newArr = item
      .map((x) => {
        return x.quantity;
      })
      .reduce((acc, x) => {
        return acc + x;
      }, 0);
    return newArr;
  };

  return (
    <div className="cart-icon-container" onClick={setter}>
      <Shopping className="shopping-icon" />

      <span className="item-count">{Quant()}</span>
    </div>
  );
};

export default CartIcon;
