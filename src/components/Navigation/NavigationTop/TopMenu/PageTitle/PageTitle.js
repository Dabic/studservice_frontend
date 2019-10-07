import React from 'react'
import {connect} from 'react-redux'
import classes from './PageTitle.module.css'

const PageTitle = props => {
    return <p className={classes.PageTitle}>{props.pageTitle}</p>
}

const mapStateToProps = state => {
    return {
        pageTitle: state.pageReducer.title
    }
}
export default connect(mapStateToProps)(PageTitle)