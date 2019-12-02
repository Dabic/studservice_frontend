import React from "react";
import classes from './CheckBox.module.css'

const CheckBox = props => {
    return (
        <div className={classes.CheckBox}>
            <input type='checkbox' onChange={props.onChange} name={props.name} value={props.value} checked={props.checked}/>
            <label>{props.label}</label>
        </div>
    )
}

export default CheckBox