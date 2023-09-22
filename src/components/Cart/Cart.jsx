import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../Modal/Modal";
import CartItems from "./CartItems/CartItems";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const ctxData = useContext(CartContext);
  const { items, totalAmount, addItem, removeItem } = ctxData;

  const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    addItem(item);
  };

  return (
    <Modal onClick={props.onClick}>
      <ul className={classes.cart_items}>
        {items.map((cart_item) => (
          <CartItems
            key={cart_item.id}
            item={cart_item}
            onRemove={cartItemRemoveHandler.bind(null, cart_item.id)}
            onAdd={cartItemAddHandler.bind(null, cart_item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes.close} onClick={props.onClick}>
          Close
        </button>
        {hasItems && (
          <button type="button" className={classes.order}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
