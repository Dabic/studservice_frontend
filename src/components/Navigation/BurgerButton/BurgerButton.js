import React from 'react'
import classes from './BurgerButton.module.css'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

const BurgerButton = props => {
    return (
        <div className={classes.BurgerButton} onClick={props.toggleClicked}>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleClicked: () => dispatch(actions.onBurgerClicked())
    }
}
export default connect(null, mapDispatchToProps)(BurgerButton)