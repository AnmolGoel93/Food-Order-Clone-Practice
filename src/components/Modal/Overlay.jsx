import React from "react";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Overlay;
