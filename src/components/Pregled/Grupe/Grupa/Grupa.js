import React from "react";
import classes from './Grupa.module.css'
import * as actions from "../../../../store/actions";
import {connect} from 'react-redux'

const Grupa = (props) => {
    return (
        <div onClick={() => props.grupaOnClick(props.grupa)} className={classes.Grupa}>
            <div className={classes.GrupaStart}>{props.grupa.oznaka_grupe}</div>
            <div className={classes.GrupaEnd}>
                <p>Broj studenata: {props.grupa.broj_studenata}</p>
                {
                    props.izborne &&
                        <div onClick={() => props.removeGrupa(props.grupa)}>
                            <i className='fas fa-times' />
                        </div>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeGrupa: (grupa) => dispatch(actions.removeIzborna(grupa))
    }
}
export default connect(null, mapDispatchToProps)(Grupa)