import React from "react";
import classes from './Button.module.css'

const Button = props => {
    let disabled = true
    const getButtonClass = () => {
        switch (props.buttonType) {
            case 'Success':
                disabled = false
                return classes.Success
            case 'Danger':
                disabled = false
                return classes.Danger
            case 'Disabled':
                disabled = true
                return classes.Disabled
            default:
                return classes.Default
        }
    }
    let buttonClass = getButtonClass()
    return <button onClick={(event) => props.clicked(event)} className={buttonClass} disabled={disabled}>{props.children}</button>
}

export default Button