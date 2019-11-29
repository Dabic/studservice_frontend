import React, {useEffect, useState} from "react";
import SuggestionItem from "./SuggestionItem/SuggestionItem";
import classes from './SuggestionList.module.css'

const SuggestionList = props => {
    const [suggestions, setSuggestions] = useState([])
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    useEffect(() => {
        setSuggestions(props.suggestions)
        setFilteredSuggestions(props.filtered)
        console.log(filteredSuggestions.length)
    }, [props.suggestions, props.filtered])



    return (
        filteredSuggestions.length > 0 && (
            <div className={classes.SuggestionList}>
                {filteredSuggestions.map((el, i) => {
                    return <SuggestionItem suggestionClicked={props.suggestionClicked} key={i} text={el}/>
                })}
            </div>
        )
    )
}

export default SuggestionList