import React from "react";
import classes from './Input.module.css'

const Input = props => {
    let inputElement
    switch (props.type) {
        case 'text':
            inputElement = <input type='text' className={classes.InputElement} defaultValue={props.value} placeholder={props.placeholder}/>
            break
        case 'email':
            inputElement = <input type='email' className={classes.InputElement} defaultValue={props.value} placeholder={props.placeholder}/>
            break
        default:
            break
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input