import React,{useEffect} from 'react'
import Info from "./Info/Info";
import classes from './AccountInfo.module.css'
import Logout from "./Logout/Logout";

const AccountInfo = props => {
    useEffect(() => {
        document.addEventListener('click', props.closeInfo)
        return () => {
            document.removeEventListener('click', props.closeInfo)
        }
    }, [props.closeInfo])
    return (
        <ul ref={props.refprop} className={classes.AccountInfo}>
            <li><Info/></li>
            <li><Logout/></li>
        </ul>
    )
}

export default AccountInfo