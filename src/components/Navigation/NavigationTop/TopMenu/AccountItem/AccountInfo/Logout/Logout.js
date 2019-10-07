import React from 'react'
import {Link} from "react-router-dom";
import classes from './Logout.module.css'

const Logout = props => {
    return (
        <div className={classes.Logout}>
            <Link to="/studserviceapp/logout">ODJAVA</Link>
        </div>
    )
}

export default Logout