import React, {useState} from 'react'
import AdminMenu from "./AdminMenu/AdminMenu";
import SideLogo from "../SideLogo/SideLogo";
import classes from './SideMenu.module.css'
import {connect} from 'react-redux'
import StudentMenu from "./StudentMenu/StudentMenu";
import SekretarMenu from "./SekretarMenu/SekretarMenu";
import NastavnikMenu from "./NastavnikMenu/NastavnikMenu";

const SideMenu = props => {
    const [active, setActive] = useState('')
    const onDropdownClicked = (label) => {
        if(active === label){
            setActive('')
        }else{
            setActive(label)
        }
    }
    let menu = null
    if(props.authenticatedAs === 'Administrator'){
        menu = <AdminMenu active={active} onDropdownClicked={onDropdownClicked}/>
    }else if(props.authenticatedAs === 'Student'){
        menu = <StudentMenu active={active} onDropdownClicked={onDropdownClicked}/>
    }else if(props.authenticatedAs === 'Sekretar'){
        menu = <SekretarMenu active={active} onDropdownClicked={onDropdownClicked}/>
    }else if(props.authenticatedAs === 'Nastavnik'){
        menu = <NastavnikMenu active={active} onDropdownClicked={onDropdownClicked}/>
    }
    return (
        <div>
            <SideLogo/>
            <div className={classes.SideMenuList}>
                {menu}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authenticatedAs: state.authReducer.authenticatedAs
    }
}
export default connect(mapStateToProps)(SideMenu)