import React, {useEffect, useState} from "react";
import Grupa from "./Grupa/Grupa";
import {connect} from 'react-redux'
import classes from './Grupe.module.css'
import Filter from "../../UI/Filter/Filter";

const Grupe = props => {
    const [grupeState, setGrupeState] = useState([])
    let grupe = props.izborne ? props.izborne_grupe : props.grupe
    grupe = props.sve ? props.sve_izborne_grupe : grupe
    useEffect(() => {
        setGrupeState(grupe)
    }, [grupe])
    let render = (
        <div className={[classes.Grupe, classes.NoGroups].join(' ')}>
            <p>Grupe nisu pronadjene.</p>
        </div>
    )
    const onFilterChange = (event) => {
        const value = event.target.value.toUpperCase()
        const grupeList = grupe.filter(grupa => {
            return (
                (grupa.oznaka_grupe+grupa.smer).toUpperCase()
                    .indexOf(value.split(' ').join('')) > -1
            )
        })
        setGrupeState(grupeList)
    }
    if(grupeState && grupe.length > 0){
        render = (
            <div className={classes.Grupe}>
                <Filter onChange={onFilterChange}/>
                {
                    grupeState.map(grupa => {
                        return <Grupa grupaOnClick={props.grupaOnClick} key={grupa.oznaka_grupe} grupa={grupa} izborne={props.izborne}/>
                    })
                }
            </div>
        )
    }
    return (
        render
    )
}

const mapStateToProps = state => {
    return {
        grupe: state.grupaReducer.grupe,
        izborne_grupe: state.grupaReducer.izborne_grupe,
        sve_izborne_grupe: state.grupaReducer.sve_izborne_grupe,
        loading: state.grupaReducer.loading
    }
}
export default connect(mapStateToProps, null)(Grupe)