import React from 'react'
import logo from '../../../../assets/logo2.png'
import classes from './SideLogo.module.css'

const SideLogo = props => {
    return (
        <div className={classes.SideLogo}>
            <img src={logo} alt='studserviceapp logo'/>
        </div>
    )
}

export default SideLogo