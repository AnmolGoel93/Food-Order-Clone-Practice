import React, { useReducer } from "react";
import CartContext, { CartContextData } from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items, action.payload];
    const updatedTotalAmount = state.totalAmount + action.payload.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemsToCartHandler = (item) => {
    dispatchCart({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItemsFromCartHandler = (id) => {
    dispatchCart({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const contextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemsToCartHandler,
    removeItem: removeItemsFromCartHandler,
  };

  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
