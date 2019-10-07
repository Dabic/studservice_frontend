import React from "react";
import classes from './Godine.module.css'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

const GODINE = [
    {oznaka: 'I godina', value: 1},
    {oznaka: 'II godina', value: 2},
    {oznaka: 'III godina', value: 3},
    {oznaka: 'IV godina', value: 4}
]
const Godine = props => {
    let fun = (val) => props.getGrupe(val)
    if(props.tip === 'izborne'){
        fun = (val) => props.getIzborneGrupe(val)
    }
    return (
        <div className={classes.Godine}>
            {
                GODINE.map(godina => {
                    return <div key={godina.value} onClick={() => fun(godina.value)} className={classes.Godina}>{godina.oznaka}</div>
                })
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getGrupe: (godina) => dispatch(actions.getGrupe(godina)),
        getIzborneGrupe: (godina) => dispatch(actions.getIzborne(godina))
    }
}
export default connect(null, mapDispatchToProps)(Godine)