import React from "react";
import classes from "./GameList.module.css";

const gameList = (props) => {
  return (
    <ul>
      {props.games.map((game) => (
        <li key={game["Game"]} className={classes.listItems}>
          <h2>{game["Game"]}</h2>
          <p>{game["Rating"]}</p>
        </li>
      ))}
    </ul>
  );
};

export default gameList;
