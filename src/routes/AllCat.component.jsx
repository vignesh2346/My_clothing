import { useContext } from "react";
import { ProductContext } from "../context/product-context";
import { CartItemContext } from "../context/CartItem-context";

import ProductContainer from "../Components/ProductContainer.component";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import { setItem } from "../store/Cart/cartAction";

const Hats = ({ props }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => {
    return state.cart.item;
  });
  const val = props;
  // const { product } = useContext(ProductContext);
  const product = useSelector((state) => {
    return state.product.product;
  });
  // const { item, setItem } = useContext(CartItemContext);
  const navigate = useNavigate();
  const hat = product.filter((x) => {
    return x.title.toLocaleLowerCase() === String(val.toLocaleLowerCase());
  });

  let addItem = () => {};

  if (hat.length === 0) {
    alert("You have entered a wrong url");
  } else {
    const { items } = hat[0];
    addItem = (e) => {
      const obj = items.find((x) => {
        return Number(x.id) === Number(e.target.id);
      });

      if (
        !item
          .map((x) => {
            return x.id;
          })
          .includes(obj.id)
      ) {
        dispatch(setItem([{ ...obj }, ...item]));
      } else {
        const index = item.findIndex((x) => x.id === Number(e.target.id));
        item[index].quantity = item[index].quantity + 1;
        dispatch(setItem([...item]));
      }
    };
    const imageHandler = (e) => {
      navigate(`/item/${e.target.id}`);
    };

    return (
      <div className="products">
        {items.map((x) => {
          const { id, imageUrl, name, price } = x;
          return (
            <ProductContainer
              key={id}
              id={id}
              imageUrl={imageUrl}
              name={name}
              price={price}
              imageHandler={imageHandler}
              addItem={addItem}
            />
          );
        })}
      </div>
    );
  }
};

export default Hats;
