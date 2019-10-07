import React from "react";
import Select from "../Select/Select";
import classes from './SharableLists.module.css'

const SharableLists = props => {
    return (
        <div className={classes.SharableLists}>
            <Select
                options={props.odabir}
                noFilter={false}
                showPlaceholder={false}
                collapseContent={false}
                multiple={true}
                emptyList={true}/>
            <Select
                options={props.odabrani}
                noFilter={false}
                showPlaceholder={false}
                collapseContent={false}
                multiple={true}
                emptyList={true}/>
        </div>
    )
}

export default SharableLists