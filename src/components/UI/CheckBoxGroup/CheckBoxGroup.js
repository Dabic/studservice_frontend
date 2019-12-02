import React from "react";
import classes from './CheckBoxGroup.module.css'
import CheckBox from "./CheckBox/CheckBox";

const CheckBoxGroup = props => {
    return (
        <div className={classes.CheckBoxGroup}>
            {
                props.elements.map((el, i) => {
                    return <CheckBox key={i} onChange={() => props.onChange(props.itemId, i)} name={el.name} value={el.value} label={el.label} checked={el.checked}/>
                })
            }
        </div>
    )
}

export default CheckBoxGroup