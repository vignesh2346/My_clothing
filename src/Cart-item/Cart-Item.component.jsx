import "./Cart-Item.styles.scss";
// import { useContext, Fragment } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { setItem } from "../store/Cart/cartAction";
import { total } from "../CartUtil";
import { RemoveItem } from "../CartUtil";

// import { CartItemContext } from "../context/CartItem-context";

const CartItem = ({ className }) => {
  // const { item, setItem } = useContext(CartItemContext);
  const dispatch = useDispatch();
  const item = useSelector((state) => {
    return state.cart.item;
  });

  const removeItem = (e) => {
    const indx = item.findIndex((x) => {
      return Number(x.id) === Number(e.target.id);
    });
    item.splice(indx, 1);
    dispatch(setItem(item.concat()));
  };

  return (
    <div className={className}>
      {item.length !== 0 ? (
        <div>
          <h1>{"Items in your Cart"}</h1>
          {item.map((x) => {
            return (
              <div key={x.id}>
                <img src={x.imageUrl}></img>
                <h3>{`${x.quantity} x $${x.price}`}</h3>
                <span id={x.id} className="closing" onClick={removeItem}>
                  {" "}
                  X
                </span>
                <h2>{x.name}</h2>
              </div>
            );
          })}
          <h4>{`Total: `}</h4>
          <span className="amount">{`$${total(item)}`}</span>
        </div>
      ) : (
        <p>{"Your Cart is Empty"}</p>
      )}
    </div>
  );
};

export default CartItem;
