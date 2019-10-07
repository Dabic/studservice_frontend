import React from "react";
import classes from "./Filter.module.css";

const Filter = props => {
    let filterClasses = props.noBorder ? [classes.Filter, classes.NoBorder] : [classes.Filter]
    return (
        <div className={classes.FilterContainer}>
            <i className={['fas fa-search', classes.FilterIcon].join(' ')} />
            <input onChange={props.onChange} className={filterClasses.join(' ')} placeholder='Filter...'/>
        </div>
    )
}

export default Filter