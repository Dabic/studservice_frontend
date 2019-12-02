import React from "react";
import classes from './Input.module.css'

const Input = props => {
    let inputElement
    let inputClasses = [classes.InputElement]
    let elementClass = ''
    if(props.type === 'textarea')
        elementClass = classes.TextArea
    if(!props.valid && props.touched)
        inputClasses.push(classes.Invalid)
    switch (props.type) {
        case 'text':
            inputElement = <input type='text' onChange={(event) => props.onChange(props.itemId, event.target.value)} className={inputClasses.join(' ')} value={props.value} placeholder={props.placeholder}/>
            break
        case 'email':
            inputElement = <input type='email' onChange={(event) => props.onChange(props.itemId, event.target.value)} className={inputClasses.join(' ')} value={props.value} placeholder={props.placeholder}/>
            break
        case 'textarea':
            inputClasses.push(classes.TextAreaInput)
            inputElement = <textarea className={inputClasses.join(' ')} onChange={(event) => props.onChange(props.itemId, event.target.value)} placeholder={props.placeholder}/>
            break
        case 'file':
            inputClasses.push(classes.FileInput)
            inputElement = <input type='file' className={inputClasses.join(' ')}/>
            break
        default:
            break
    }
    return (
        <div className={elementClass}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input