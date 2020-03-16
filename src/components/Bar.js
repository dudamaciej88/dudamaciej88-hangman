import React from "react";
import Button from "./Button";
import classes from "./Bar.module.css"


const Bar = props => {



return (
<div className={props.class ? classes.BarTop : classes.BarBottom}>
<p>{props.barTxt}</p>
{props.btn ? <Button clicked={props.clicked} btnTxt={props.btnTxt}/> : null}
    </div>
)

};

export default Bar;