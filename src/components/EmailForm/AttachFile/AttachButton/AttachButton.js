import React from "react";
import classes from './AttachButton.module.css'

const AttachButton = props => {
    return (
        <i className={[classes.AttachButton, 'fas fa-paperclip'].join(' ')} />
    )
}

export default AttachButton