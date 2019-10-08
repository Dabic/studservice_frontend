import React from "react";
import classes from './Button.module.css'

const Button = props => {
    const getButtonClass = () => {
        switch (props.buttonType) {
            case 'Success':
                return classes.Success
            case 'Danger':
                return classes.Danger
            case 'Disabled':
                return classes.Disabled
            default:
                return classes.Default
        }
    }
    let buttonClass = getButtonClass()
    return <button onClick={(event) => props.clicked(event)} className={buttonClass}>{props.children}</button>
}

export default Button