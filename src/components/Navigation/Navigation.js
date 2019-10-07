import React from 'react'
import NavigationTop from "./NavigationTop/NavigationTop";
import NavigationSide from "./NavigationSide/NavigationSide";

const Navigation = props => {
    return (
        <React.Fragment>
            <NavigationTop/>
            <NavigationSide/>
        </React.Fragment>
    )
}

export default Navigation