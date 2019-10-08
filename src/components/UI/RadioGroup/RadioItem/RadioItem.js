import React from "react";
import classes from './RadioItem.module.css'

const RadioItem = props => {
    return (
        <div className={classes.RadioItem}>
            <input onChange={props.onChange} id={props.option.value} type='radio' value={props.option.value} name={props.groupName} checked={props.option.checked}/>
            <label className={classes.Label} htmlFor={props.option.value}>{props.option.display}</label>
        </div>
    )
}

export default RadioItem