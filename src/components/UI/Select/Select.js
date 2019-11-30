import React, {useEffect, useRef, useState} from "react";
import Option from "./Option/Option";
import classes from './Select.module.css'
import Filter from "../Filter/Filter";

const Select = props => {
    const mainContentRef = useRef(null)
    const [selectValue, setSelectValue] = useState([])
    const [filtered, setFiltered] = useState([])
    useEffect(() => {
        if(!props.multiple)
            setSelectValue(props.defaultValue)
        if(!props.defaultValue)
            setSelectValue({display: 'Nacin slanja'})
        console.log(props.defaultValue)
    }, [props.defaultValue, props.multiple])
    useEffect(() => {
        if(props.multiple)
            setSelectValue(props.selected)
    }, [props.selected, props.multiple])
    useEffect(() => {
        setFiltered(props.options)
    }, [props.options])
    const onFilterChange = (event) => {
        const val = event.target.value.toUpperCase()
        const newList = [...props.options].filter(item => {
            return item.display.toUpperCase().indexOf(val) > -1
        })
        setFiltered(newList)
    }
    const containsOption = (list, _option) => {
        return list.filter(option => option.value === _option.value).length > 0
    }
    const onClickPlaceholder = () => {
        if(mainContentRef.current.classList.contains(classes.Collapse))
            mainContentRef.current.classList.remove(classes.Collapse)
        else
            mainContentRef.current.classList.add(classes.Collapse)
    }
    const onClickItem = (clickedOption) => {
        if(props.multiple){
            let updatedState = [...selectValue]
            if(containsOption(updatedState, clickedOption)) {
                updatedState = updatedState.filter(option => option.value !== clickedOption.value)
            }
            else
                updatedState.push(clickedOption)
            props.onChangeHandler(updatedState)
        }else{
            setSelectValue(clickedOption)
            props.onChangeHandler(props.itemId, clickedOption)
            onClickPlaceholder()
        }
    }
    let placeholderClass = props.showPlaceholder ? [classes.Placeholder] : [classes.NoPlaceholder]
    if (props.noPlaceholder)
        placeholderClass.push(classes.NoPlaceholder)
    let placeholder = (
        <div onClick={onClickPlaceholder} className={placeholderClass.join(' ')}>
            <div className={classes.PlaceholderText}>{selectValue.display}</div>
            <i className='fas fa-angle-down'/>
        </div>
    )
    let filterClasses = props.noFilter ? classes.NoFilter : ''
    let filter = (
        <div className={filterClasses}>
            <Filter onChange={onFilterChange} noBorder={true}/>
        </div>
    )
    let contentClasses = props.emptyList ? [classes.Content, classes.EmptyList] : [classes.Content]
    let content = (
        <div className={contentClasses.join(' ')}>
            {
                filtered.map(option => {
                    let active = null
                    if(props.multiple)
                        active = containsOption(selectValue, option)
                    else if(selectValue.value === option.value) {
                        active = true
                    }
                    return <Option active={active} key={option.value} onClickOption={onClickItem} option={option}/>
                })
            }
        </div>
    )
    return (
        <div className={!props.dontGrow && classes.SelectWrapper}>
            {props.label && <label className={classes.Label}>{props.label}</label>}
            <div className={props.defaultBorder ? classes.SelectDefaultBorder : classes.Select}>
                {placeholder}
                <div ref={mainContentRef} className={props.collapseContent ? classes.Collapse : null}>
                    {filter}
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Select