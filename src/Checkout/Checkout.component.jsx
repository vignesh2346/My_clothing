import "./Checkout.styles.scss";
import { CartItemContext } from "../context/CartItem-context";
import { useContext } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { setItem } from "../store/Cart/cartAction";
import { total } from "../CartUtil";
const Checkout = () => {
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

  const inc = (e) => {
    const exist = item.find((x) => {
      return Number(x.id) === Number(e.target.id);
    });
    if (exist) {
      const newArr = item.map((x) => {
        if (Number(x.id) === Number(e.target.id)) {
          x.quantity = x.quantity + 1;
          return x;
        } else {
          return x;
        }
      });

      dispatch(setItem(newArr));
    } else {
      dispatch(setItem([...item]));
    }
  };

  const dec = (e) => {
    const exist = item.find((x) => {
      return Number(x.id) === Number(e.target.id);
    });
    if (exist) {
      const newArr = item
        .map((x) => {
          if (Number(x.id) === Number(e.target.id)) {
            x.quantity = x.quantity - 1;
            return x;
          } else {
            return x;
          }
        })
        .filter((x) => {
          return x.quantity > 0;
        });

      dispatch(setItem(newArr));
    } else {
      dispatch(setItem([...item]));
    }
  };

  return (
    <div>
      {item.length !== 0 ? (
        <div className="checkout-page">
          <h1 className="checkout-header">{"Items in your Cart"}</h1>
          {item.map((x) => {
            return (
              <div className="checkout-container" key={x.id}>
                <img className="checkout-image" src={x.imageUrl}></img>
                <h3 className="checkout-price">
                  <span id={x.id} className="dec" onClick={dec}>{`< `}</span>
                  {`${x.quantity}`}
                  <span id={x.id} className="inc" onClick={inc}>
                    {` >`}{" "}
                  </span>
                </h3>
                <h3>{`${x.price}`}</h3>
                <span
                  id={x.id}
                  className="checkout-closing"
                  onClick={removeItem}
                >
                  {" "}
                  X
                </span>

                <h2 className="checkout-name">{x.name}</h2>
                <hr></hr>
              </div>
            );
          })}
          <h4 className="checkout-total">{`Total: `}</h4>
          <span className="checkout-amount">{`$${total(item)}`}</span>
        </div>
      ) : (
        <p>{"Your Cart is Empty"}</p>
      )}
    </div>
  );
};

export default Checkout;
