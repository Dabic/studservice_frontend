import React from "react";
import classes from './Backdrop.module.css'

const Backdrop = props => {
    const backdropClasses = [classes.Backdrop]
    if (props.important) {
        backdropClasses.push(classes.BackdropImportant)
    }
    return (
        props.show ? <div onClick={props.backdropClicked} className={backdropClasses.join(' ')}></div> : null
    )
}

export default Backdrop