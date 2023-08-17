import { useState } from "react";
import "./App.css";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShow, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return <CartProvider>
    <Cart></Cart>
  </CartProvider>;
};

export default App;
