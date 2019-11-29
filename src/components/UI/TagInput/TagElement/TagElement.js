import React from "react";
import classes from './TagElement.module.css'

const TagElement = props => {
    return (
        <div className={classes.TagElement} onClick={() => props.deleteTag(props.text)}>
            <p className={classes.TagElementText}>{props.text}</p>
            <i className={['fas fa-times', classes.TagElementDelete].join(' ')}/>
        </div>
    )
}

export default TagElement