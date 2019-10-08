import React from "react";
import classes from './Fieldset.module.css'

const Fieldset = props => {
    return (
        <fieldset className={classes.Fieldset}>
            <legend className={classes.Legend}>{props.legend}</legend>
            {props.children}
        </fieldset>
    )
}

export default Fieldset