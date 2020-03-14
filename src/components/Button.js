import React from "react";
import classes from "./Button.module.css"


const Button = props => {



return (
<button className={classes.Button} onClick={props.clicked}>{props.btnTxt}</button>
)

};

export default Button;