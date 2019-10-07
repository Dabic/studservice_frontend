import React from 'react'
import avatar from '../../../../../../../assets/avatar.jpg'
import classes from './Info.module.css'
import {connect} from 'react-redux'

const Info = props => {
    return (
        <div className={classes.Info}>
            {
                props.authenticatedAs === 'Student' ?
                    <img src={props.user.icon} alt='account logo info' />
                    :
                    <img src={avatar} alt='account logo info' />
            }
            <div>
                <span>{props.user.ime} {props.user.prezime}</span>
                {
                    props.authenticatedAs === 'Student' &&
                    <span>{props.user.smer} {props.user.broj_indeksa}/{props.user.godina_upisa}</span>
                }
                {props.authenticatedAs === 'Administrator' && <span>Administrator</span>}
                {props.authenticatedAs === 'Sekretar' && <span>Sekretar</span>}
                {props.authenticatedAs === 'Nastavnik' && <span>zvanje titula</span>}
                <span>{props.nalog.username}@raf.rs</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user,
        nalog: state.authReducer.nalog,
        authenticatedAs: state.authReducer.authenticatedAs
    }
}
export default connect(mapStateToProps)(Info)