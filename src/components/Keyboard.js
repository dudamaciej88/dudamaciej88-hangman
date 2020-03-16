import React from "react";
import classes from "./Keyboard.module.css";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = props => (
  <ul className={classes.Keyboard}>
    {letters.map(letter => (
      <li
        key={letter}
        className={
          props.guessedLetters.includes(letter) ||
          props.missedLetters.includes(letter)
            ? classes.Guessed
            : classes.Letter
        }
        onClick={() => props.onClick(letter)}
      >
        {letter}
      </li>
    ))}
  </ul>
);

export default Keyboard;
