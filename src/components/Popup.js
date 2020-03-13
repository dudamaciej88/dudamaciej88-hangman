import React from "react";
import classes from "./Popup.module.css"


const Popup = props => (
  <div className={classes.Result}>
    <p>{props.msg}</p>
<button onClick={props.clicked1}>{props.btnTxt1}</button>
<button onClick={props.clicked2}>{props.btnTxt2}</button>
  </div>
);

export default Popup;