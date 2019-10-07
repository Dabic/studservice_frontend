import React from 'react'
import TopMenu from "./TopMenu/TopMenu";
import classes from './NavigationTop.module.css'

const NavigationTop = props => {
    return (
        <nav className={classes.NavigationTop}>
            <TopMenu/>
        </nav>
    )
}

export default NavigationTop