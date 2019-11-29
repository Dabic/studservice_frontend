import React from "react";
import classes from './SuggestionItem.module.css'

const SuggestionItem = props => {
    return (
        <div className={classes.SuggestionItem} onClick={() => props.suggestionClicked(props.text)}>
            <p className={classes.SuggestionItemContent}>{props.text}</p>
        </div>
    )
}

export default SuggestionItem