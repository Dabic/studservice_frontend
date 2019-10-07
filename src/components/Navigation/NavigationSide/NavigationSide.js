import React from 'react'
import SideMenu from "./SideMenu/SideMenu";
import classes from './NavigationSide.module.css'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'
import Backdrop from "../../UI/Backdrop/Backdrop";

const NavigationSide = props => {
    return (
        !props.showSideNav ?
            <div className={classes.NavigationSide}>
                <SideMenu/>
            </div>
            :
            <div>
                <Backdrop show={true} backdropClicked={props.backdropClicked}/>
                <div className={[classes.NavigationSide, classes.DisplaySideNav].join(' ')}>
                    <SideMenu/>
                </div>
            </div>
    )

}

const mapStateToProps = state => {
    return {
        showSideNav: state.pageReducer.showSideNav
    }
}
const mapDispatchToProps = dispatch => {
    return {
        backdropClicked: () => dispatch(actions.onBurgerClicked())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationSide)