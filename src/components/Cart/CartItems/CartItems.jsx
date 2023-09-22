import React from "react";
import classes from "./CartItems.module.css";

const CartItems = ({ item, onRemove, onAdd }) => {
  const formattedPrice = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes.cart_item}>
      <div className={classes.details}>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.quantity}>x {item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes.decrease} onClick={onRemove}>
          -
        </button>
        <button type="button" className={classes.increase} onClick={onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItems;
