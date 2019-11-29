import React from "react";
import classes from './AttachItem.module.css'

const AttachItem = props => {
    return (
        <div className={classes.AttachItem}>
            <p className={classes.AttachItemText}>{props.name}</p>
            <i onClick={props.clicked} className={['fas fa-times', classes.AttachItemDelete].join(' ')}/>
        </div>
    )
}

export default AttachItem