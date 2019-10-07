import React from "react";
import classes from './Option.module.css'

const Option = props => {
    let optionClasses = props.active ? [classes.Option, classes.Active] : [classes.Option]
    return (
        <div onClick={() => props.onClickOption(props.option)} className={optionClasses.join(' ')} id={props.option.value}>
            {props.option.display}
        </div>
    )
}

export default Option