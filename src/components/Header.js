import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>My recipe</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table with delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
