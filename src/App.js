import React, { useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const showCartModal = () => {
    setIsCartModalVisible(true);
  };

  const hideCartModal = () => {
    setIsCartModalVisible(false);
  };

  return (
    <CartProvider>
      {isCartModalVisible && <Cart onClick={hideCartModal} />}
      <Header onClick={showCartModal} />
      <Meals />
    </CartProvider>
  );
};

export default App;
