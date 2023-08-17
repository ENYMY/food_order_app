import { useState } from "react";
import "./App.css";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShow, setCartIsShown] = useState(false);

  const showCartHandler = () => {};
  const hideCartHandler = () => {};

  return <CartProvider></CartProvider>;
};

export default App;
