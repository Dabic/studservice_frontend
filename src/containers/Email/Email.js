import React, {useEffect, useState} from "react";
import EmailForm from "../../components/EmailForm/EmailForm";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import classes from './Email.module.css'
import SpinnerCircle from "../../components/UI/Spinner/SpinnerCircle/SpinnerCircle";

const Email = props => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        props.getCategories()
        props.getPredmeti()
        props.getGrupe()
        props.getAllNalozi()
    }, [])

    useEffect(() => {
        setCategories(props.categories)
        if(props.categories.length === 0)
            props.getCategories()
    }, [props.categories])
    let predmetiArr = props.predmeti.map(el => {
        return el.naziv
    })
    let grupeArr = props.grupe.map(el => {
        return el.oznaka_grupe
    })
    let naloziArr = props.nalozi.map(el => {
        return el.username+'@raf.rs'
    })
    return (
        <div className={classes.Email}>
            {props.categories.length > 0 ? <EmailForm categories={categories} predmeti={predmetiArr} grupe={grupeArr} nalozi={naloziArr}/> : <SpinnerCircle/>}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        categories: state.emailReducer.categories,
        predmeti: state.predmetiReducer.predmeti,
        grupe: state.grupaReducer.grupe,
        nalozi: state.nalogReducer.nalozi
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(actions.getCategories()),
        getPredmeti: () => dispatch(actions.getPredmeti()),
        getGrupe: () => dispatch(actions.getAllGrupe()),
        getAllNalozi: () => dispatch(actions.getAllNalozi())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Email)