import React from "react";

const CartContextData = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext(CartContextData);

export default CartContext;
export { CartContextData };
