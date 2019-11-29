import React from "react";
import Studenti from "../Studenti/Studenti";
import classes from './Spisak.module.css'
import Grupe from "../Grupe/Grupe";

const Spisak = props => {
    const spisakClasses = props.backButton ? [classes.Spisak] : [classes.Spisak, classes.NoButton]
    return (
        <div className={spisakClasses.join(' ')}>
            {
                props.backButton ?
                    <div className={classes.SpisakArrowContainer}>
                        <i onClick={props.onBackClicked} className={['fas fa-arrow-left', classes.SpisakArrow].join(' ')} />
                    </div>
                    :
                    null
            }
            {
                props.vrsta === 'studenti' ?
                    <Studenti tip={props.tip}/>
                    :
                    <Grupe grupaOnClick={props.grupaOnClick} sve={true} izborne={true}/>
            }
        </div>
    )
}
export default Spisak