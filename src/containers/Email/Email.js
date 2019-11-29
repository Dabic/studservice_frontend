import React, {useEffect, useState} from "react";
import EmailForm from "../../components/EmailForm/EmailForm";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import SpinnerCircle from "../../components/UI/Spinner/SpinnerCircle/SpinnerCircle";
import TagInput from "../../components/UI/TagInput/TagInput";

const Email = props => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        props.getCategories()
    }, [])

    useEffect(() => {
        setCategories(props.categories)
        console.log(props.categories)
    }, [props.categories])
    let predmetiArr = props.predmeti.map(el => {
        return el.naziv
    })
    let grupeArr = props.grupe.map(el => {
        return el.oznaka_grupe
    })
    return (
        props.loading ? <SpinnerCircle/> : <EmailForm categories={categories} predmeti={predmetiArr} grupe={grupeArr}/>
        //<div><TagInput elements={arr2}/></div>
    )
}
const mapStateToProps = state => {
    return {
        categories: state.emailReducer.categories,
        predmeti: state.emailReducer.predmeti,
        grupe: state.emailReducer.grupe,
        loading: state.emailReducer.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(actions.getCategories())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Email)