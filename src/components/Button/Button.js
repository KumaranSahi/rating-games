import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      onClick={() => props.genreClicked(props.children)}
      className={classes.genreButton}
    >
      {props.children}
    </button>
  );
};

export default button;
