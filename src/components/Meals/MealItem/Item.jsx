import React, { useState, useContext, useEffect } from "react";
import classes from "./Item.module.css";
import CartContext from "../../../store/CartContext";

const Item = ({ mealDetails }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const ctxData = useContext(CartContext);

  useEffect(() => {
    ctxData.addItem({
      id: mealDetails.id,
      name: mealDetails.name,
      price: mealDetails.price,
      quantity: itemQuantity,
    });
  }, [itemQuantity]);

  const addItemsToCartClickHandler = () => {
    setItemQuantity((prevQuantity) => {
      if (prevQuantity < 0 || prevQuantity < 4) {
        return prevQuantity + 1;
      } else {
        return prevQuantity;
      }
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes.details}>
        <h3>{mealDetails.name}</h3>
        <div className={classes.description}>{mealDetails.description}</div>
        <div className={classes.price}>
          ${`${mealDetails.price.toFixed(2)}`}
        </div>
      </div>
      <div className={classes.quantity}>
        <form className={classes.form}>
          <label htmlFor={mealDetails.id}>Amount</label>
          <input
            value={itemQuantity}
            id={mealDetails.id}
            type="number"
            disabled
          ></input>
        </form>
        <div className={classes.actions}>
          <button
            className={classes.add}
            type="button"
            onClick={addItemsToCartClickHandler}
            disabled={itemQuantity < 0 || itemQuantity > 4}
          >
            + Add
          </button>
        </div>
      </div>
    </li>
  );
};

export default Item;
