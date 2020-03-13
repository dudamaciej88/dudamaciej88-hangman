import React from "react";
import classes from "./AnswerDisplayer.module.css";

const AnswerDisplayer = props => {
  const phrase = props.answer.split(/[ ,]+/);
  const words = phrase.map(word => word.split(""));

  const letters = words.map((word, i) => (
    <ul key={i}>
      {word.map((letter, i) => (
        <li key={i} className={classes.Letter}>
          <span
            className={
              props.guesses.includes(letter) ? classes.Visible : classes.Hidden
            }
          >
            {letter}
          </span>
        </li>
      ))}
      <li>&nbsp;</li>
    </ul>
  ));

  return (
  <div className={classes.Displayer}>{letters}</div>
  
  );
};

export default AnswerDisplayer;
