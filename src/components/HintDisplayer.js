import React from "react";
import classes from "./HintDisplayer.module.css"


const HintDisplayer = props => {



return (
<div><p>{props.hintTxt}{props.hintData}</p></div>
)

};

export default HintDisplayer;