import React, {useEffect} from 'react'
import {withRouter} from "react-router";
import {Redirect} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'
import AdminConf from "./containers/SiteConf/AdminConf";
import LoginConf from "./containers/SiteConf/LoginConf";
import StudentConf from "./containers/SiteConf/StudentConf";
import SekretarConf from "./containers/SiteConf/SekretarConf";
import NastavnikConf from "./containers/SiteConf/NastavnikConf";

const App = props => {
    useEffect(() => {
        props.authAutoSetState()
    })
    let routes = null
    switch(props.authenticatedAs){
        case 'Administrator':
            routes = (
                <React.Fragment>
                    <Redirect to='/studserviceapp' />
                    <AdminConf/>
                </React.Fragment>
            )
            break
        case 'Sekretar':
            routes = (
                <React.Fragment>
                    <Redirect to='/studserviceapp' />
                    <SekretarConf/>
                </React.Fragment>
            )
            break
        case 'Student':
            routes = (
                <React.Fragment>
                    <Redirect to='/studserviceapp' />
                    <StudentConf/>
                </React.Fragment>
            )
            break
        case 'Nastavnik':
            routes = (
                <React.Fragment>
                    <Redirect to='/studserviceapp' />
                    <NastavnikConf/>
                </React.Fragment>
            )
            break
        default:
            routes = <LoginConf/>
    }
    return routes
}
const mapStateToProps = state => {
    return {
        authenticatedAs: state.authReducer.authenticatedAs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authAutoSetState: () => dispatch(actions.authAutoSetState())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))