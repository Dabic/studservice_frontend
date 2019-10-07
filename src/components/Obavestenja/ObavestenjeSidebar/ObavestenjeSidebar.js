import React, {useState} from "react";
import classes from './ObavestenjeSidebar.module.css'

const ObavestenjeSidebar = props => {
    const [show, setShow] = useState(false)
    const onClickSidebar = () => {
        setShow(prevState => {
            return !prevState
        })
    }
    let sidebarClasses = show ? [classes.ObavestenjeSidebar, classes.Active] : [classes.ObavestenjeSidebar]
    let classTemp = !show ? 'fas fa-angle-left' : 'fas fa-angle-right'
    let iconClasses = [classes.Arrow, classTemp].join(' ')
    return (
        <div onClick={onClickSidebar} className={sidebarClasses.join(' ')}>
            <div className={classes.ArrowContainer}> <i className={iconClasses} /></div>
            <div></div>
        </div>
    )
}

export default ObavestenjeSidebar