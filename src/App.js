import Home from "./routes/Home.component";
import Item from "./routes/Item.component";
import Shop from "./routes/Shop.component";
import Contact from "./Components/Contact.component";
import Signin from "./routes/Signin.component";
import Navigation from "./Components/Navigation.component";
import Checkout from "./Checkout/Checkout.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChangedListener } from "./Utils/Firebase/Firebase";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./store/User/userAction";
import "./categories.styles.scss";
import { setClick } from "./store/icon/iconAction";
import { useSelector } from "react-redux/es/exports";

const App = () => {
  const dispatch = useDispatch();
  const click = useSelector((state) => {
    return state.icon.click;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((u) => {
      dispatch(setCurrentUser(u));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/item/*" element={<Item />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
