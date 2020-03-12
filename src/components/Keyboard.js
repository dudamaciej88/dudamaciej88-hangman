import React from "react";
import classes from "./Keyboard.module.css";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = props => (
  <div>
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
  </div>
);

export default Keyboard;
