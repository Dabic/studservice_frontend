import React from "react";
import AttachButton from "./AttachButton/AttachButton";
import classes from './AttachFile.module.css'

const AttachFile = props => {
    return (
        <div className={classes.AttachFile} onClick={props.clicked}>
            <AttachButton/>
            <p className={classes.AttachLabel}>Dodaj fajl</p>
        </div>
    )
}

export default AttachFile