import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import { Userprovider } from "./context/User.context";
import { ProductProvider } from "./context/product-context";
import { IconProvider } from "./context/icon-context";
import { CartItemProvider } from "./context/CartItem-context";
import { Fragment } from "react";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <Userprovider> */}
          {/* <ProductProvider> */}
          {/* <IconProvider> */}
          {/* <CartItemProvider> */}

          <App />

          {/* </CartItemProvider> */}
          {/* </IconProvider> */}
          {/* </ProductProvider> */}
          {/* </Userprovider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
