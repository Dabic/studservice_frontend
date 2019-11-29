import React, {useEffect, useRef, useState} from "react";
import TagElement from "./TagElement/TagElement";
import SuggestionList from "./SuggestionList/SuggestionList";
import classes from './TagInput.module.css'

const TagInput = props => {
    const [tags, setTags] = useState([])
    const [suggestions, setSuggestions] = useState([])
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const tagInput = useRef()
    useEffect(() => {
        setSuggestions(props.elements)
    }, [props.elements])

    const filterSuggestions = text => {
        if (text.length === 0)
            setFilteredSuggestions([])
        else
            setFilteredSuggestions(suggestions.filter((el) => el.toUpperCase().indexOf(text.toUpperCase()) > -1))
    }
    const addTag = tag => {
        const tagList = [...tags]
        tagList.push(tag)
        setTags(tagList)
        tagInput.current.value = ''
        filterSuggestions('')
        const newSuggestions = suggestions.filter(el => el !== tag)
        setSuggestions(newSuggestions)
        props.onChange(props.item_id, tagList)
    }
    const deleteTag = tag => {
        setTags(tags.filter(el => el !== tag))
        const newSuggestions = [...suggestions]
        newSuggestions.push(tag)
        setSuggestions(newSuggestions)
        props.onChange(props.item_id, tags)
    }
    return (
        <div>
            <div>
                <div className={classes.InputContainer}>
                    {
                        tags.map((el, i) => {
                            return <TagElement key={i} deleteTag={deleteTag} text={el}/>
                        })
                    }
                    <input
                        ref={tagInput}
                        className={classes.InputElement}
                        placeholder={props.placeholder}
                        type={props.typ}
                        onChange={event => filterSuggestions(event.target.value)}/>
                </div>
                <SuggestionList suggestionClicked={addTag} suggestions={suggestions} filtered={filteredSuggestions}/>
            </div>
        </div>
    )
}

export default TagInput