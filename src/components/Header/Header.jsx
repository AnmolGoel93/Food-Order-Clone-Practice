import React, { useContext } from "react";
import classes from "./Header.module.css";
import CartIcon from "../../assets/CartIcon";
import mealsImage from "../../assets/meals.jpg";
import CartContext from "../../store/CartContext";
import DUMMY_CART_ITEMS from "../../data/dummy-cart-items";

const Header = (props) => {
  const ctxData = useContext(CartContext);
  const quantity = ctxData.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);

  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button
          className={classes.cart_button}
          type="button"
          onClick={props.onClick}
        >
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span className={classes.text}>Your Cart</span>
          <span className={classes.quantity}>{quantity}</span>
        </button>
      </header>
      <div className={classes.background}>
        <img src={mealsImage} alt="Meals Background"></img>
      </div>
    </>
  );
};

export default Header;
