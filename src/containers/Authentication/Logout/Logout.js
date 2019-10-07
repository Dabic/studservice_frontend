import React, {useEffect} from "react";
import * as actions from '../../../store/actions/index'
import {connect} from 'react-redux'
import {Redirect} from "react-router";

const Logout = props => {
    useEffect(() => {
        props.onLogout()

    })
    return (
        <Redirect to='/studserviceapp/auth' />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}
export default connect(null, mapDispatchToProps)(Logout)