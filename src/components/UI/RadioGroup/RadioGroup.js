import React from "react";
import Fieldset from "../Fieldset/Fieldset";
import classes from './RadioGroup.module.css'
import RadioItem from "./RadioItem/RadioItem";

const RadioGroup = props => {
    const onRadioChange = (option) => {
        const aktivnost = props.getAktivnost()
        for(let i = 0; i < aktivnost.options.length; i++){
            aktivnost.options[i].checked = aktivnost.options[i].value === option.value;
        }
        props.setAktivnost(aktivnost)
        props.onChangeHandler('aktivnost',option)
    }
    const elements = props.options.map(option => {
        return <RadioItem onChange={() => onRadioChange(option)} key={option.value} option={option} groupName={props.groupName}/>
    })
    return (
        props.fieldset ?
            <Fieldset legend={props.label}>
                <div className={classes.RadioGroup}>
                    {elements}
                </div>
            </Fieldset>
            :
            <div className={classes.RadioGroup}>
                {elements}
            </div>
    )
}

export default RadioGroup