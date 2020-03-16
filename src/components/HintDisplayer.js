import React from "react";
import classes from "./HintDisplayer.module.css"


const HintDisplayer = props => {



return (
<div className={classes.HintDisplayer}><p>{props.hintTxt}{props.hintData}</p></div>
)

};

export default HintDisplayer;