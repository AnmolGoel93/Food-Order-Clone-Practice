import React from "react";
import Summary from "./Summary";
import ItemsList from "./ItemsList";

const Meals = (props) => {
  return (
    <main>
      <Summary />
      <ItemsList />
    </main>
  );
};

export default Meals;
