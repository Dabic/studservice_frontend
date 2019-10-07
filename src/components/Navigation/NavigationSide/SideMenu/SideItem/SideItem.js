import React from 'react'
import {Link} from "react-router-dom";
import classes from './SideItem.module.css'
import * as actions from '../../../../../store/actions/index'
import {connect} from 'react-redux'

const SideItem = props => {
    const combineClasses = (other) => {
        return other.join(' ')
    }
    let renderedItem = null

    if (props.isDropdown) {
        let classesDropdown = [classes.Dropdown]
        let collapsibleClass = classes.CollapsibleMenu
        if (props.active === true) {
            classesDropdown.push(classes.Active)
            collapsibleClass = classes.CollapsibleMenuActive
        }
        renderedItem = (
            <li className={classes.SideItem}>
                <div onClick={() => props.onDropdownClicked(props.label)} className={combineClasses(classesDropdown)}>
                    <div className={classes.DropdownItem}>
                        <div>
                            <i className={combineClasses([props.faClass, classes.ItemIcon])}/>
                            {props.label}
                        </div>
                        <i className={combineClasses(['fas fa-angle-down', classes.RotateIcon])}/>
                    </div>
                </div>
                <div className={collapsibleClass}>
                    {
                        props.items.map((item, i) => {
                            return <Link onClick={() => {
                                if(props.showSideNav){
                                    props.linkOnClick()
                                }
                            }} key={i} to={item.path}>{item.name}</Link>
                        })
                    }
                </div>
            </li>
        )
    } else {
        renderedItem = (
            <li className={classes.SideItem}>
                <div className={classes.DropdownItem}>
                    <Link onClick={() => {
                        if(props.showSideNav){
                            props.linkOnClick()
                        }
                    }} to={props.path}>
                        <i className={combineClasses([props.faClass, classes.ItemIcon])}/>
                        {props.label}
                    </Link>
                </div>
            </li>
        )
    }
    return renderedItem
}
const mapStateToProps = state => {
    return {
        showSideNav: state.pageReducer.showSideNav
    }
}
const mapDispatchToProps = dispatch => {
    return {
        linkOnClick: () => dispatch(actions.onBurgerClicked())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideItem)