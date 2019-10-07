import React from 'react'
import BurgerButton from "../../BurgerButton/BurgerButton";
import PageTitle from "./PageTitle/PageTitle";
import AccountItem from "./AccountItem/AccountItem";
import classes from './TopMenu.module.css'

const TopMenu = props => {
    return (
        <ul className={classes.TopMenu}>
            <li><BurgerButton/></li>
            <li><PageTitle/></li>
            <li><AccountItem/></li>
        </ul>
    )
}

export default TopMenu