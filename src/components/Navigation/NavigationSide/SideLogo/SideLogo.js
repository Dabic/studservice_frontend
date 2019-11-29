import React from 'react'
import logo from '../../../../assets/studservice-logo.png'
import classes from './SideLogo.module.css'

const SideLogo = props => {
    return (
        <div className={classes.SideLogo}>
            <img src={logo} alt='studserviceapp logo'/>
        </div>
    )
}

export default SideLogo