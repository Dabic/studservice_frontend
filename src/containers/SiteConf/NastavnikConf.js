import React from "react";
import {Route, Switch} from "react-router";
import MainContent from "../../components/UI/MainContent/MainContent";
import Navigation from "../../components/Navigation/Navigation";
import Home from "../Home/Home";
import Logout from "../Authentication/Logout/Logout";

const NastavnikConf = props => {
    return (
        <div>
            <Navigation/>
            <MainContent>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/studserviceapp/logout' component={Logout}/>
                </Switch>
            </MainContent>
        </div>
    )
}

export default NastavnikConf