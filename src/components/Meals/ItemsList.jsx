import React from "react";
import classes from "./ItemsList.module.css";
import DUMMY_MEALS from "../../data/dummy-meals";
import Item from "./MealItem/Item";

const ItemsList = (props) => {
  return (
    <section className={classes.meals_list}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <Item key={meal.id} mealDetails={meal}></Item>
        ))}
      </ul>
    </section>
  );
};

export default ItemsList;
