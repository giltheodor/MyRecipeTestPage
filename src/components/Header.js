import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";

const Header = (props) => {
  console.log(props.data);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>My recipe</h1>
        <img
          className={classes.logo}
          src={props.data.author.logo}
          alt="logo "
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table with delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
