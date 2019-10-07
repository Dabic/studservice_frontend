import React from "react";
import Godine from "../Godine/Godine";
import Grupe from "../Grupe/Grupe";
import classes from './PregledGrupaPoGodinama.module.css'

const PregledGrupaPoGodinama = props => {
    let render = (
        <div className={classes.PregledGrupaPoGodinama}>
            <Godine/>
            <i className={['fas', classes.Indicator].join(' ')} />
            <Grupe grupaOnClick={props.grupaOnClick}/>
        </div>
    )
    if(props.tip === 'izborne'){
        render = (
            <div className={classes.PregledGrupaPoGodinama}>
                <Godine tip={props.tip}/>
                <i className={['fas', classes.Indicator].join(' ')} />
                <Grupe grupaOnClick={props.grupaOnClick} izborne={true}/>
            </div>
        )
    }
    return render
}

export default PregledGrupaPoGodinama