import React from "react";
import classes from './Input.module.css'

const Input = props => {
    let inputElement
    let inputClasses = [classes.InputElement]
    if(!props.valid && props.touched)
        inputClasses.push(classes.Invalid)
    switch (props.type) {
        case 'text':
            inputElement = <input type='text' onChange={(event) => props.onChange(props.itemId, event.target.value)} className={inputClasses.join(' ')} value={props.value} placeholder={props.placeholder}/>
            break
        case 'email':
            inputElement = <input type='email' onChange={(event) => props.onChange(props.itemId, event.target.value)} className={inputClasses.join(' ')} value={props.value} placeholder={props.placeholder}/>
            break
        default:
            break
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input