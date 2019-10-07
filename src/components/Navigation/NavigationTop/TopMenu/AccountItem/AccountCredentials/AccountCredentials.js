import React from 'react'
import avatar from '../../../../../../assets/avatar.jpg'
import classes from './AccountCredentials.module.css'
import {connect} from 'react-redux'

const AccountCredentials = props => {
    return (
        <div ref={props.refprop} onClick={props.clicked} className={classes.AccountCredentials}>
            <p>{props.user.ime} {props.user.prezime}</p>
            {
                props.authenticatedAs === 'Student' ?
                    <img src={props.user.icon} alt='account logo' />
                    :
                    <img src={avatar} alt='account logo' />
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user,
        authenticatedAs: state.authReducer.authenticatedAs
    }
}
export default connect(mapStateToProps)(AccountCredentials)