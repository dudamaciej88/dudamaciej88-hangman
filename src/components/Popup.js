import React from "react";
import classes from "./Popup.module.css"


const Popup = props => (
  <div className={classes.Result}>
    <p>{props.msg}</p>
<button onClick={props.clicked}>{props.btnTxt}</button>
  </div>
);

export default Popup;