import React from "react";
import Button from "./Button";
import classes from "./Popup.module.css";


const Popup = props => (
  <div className={classes.Result}>
    <p>{props.msg}</p>
  <Button clicked={props.clicked1} btnTxt={props.btnTxt1}/>
  <Button clicked={props.clicked2} btnTxt={props.btnTxt2}/>
  </div>
);

export default Popup;