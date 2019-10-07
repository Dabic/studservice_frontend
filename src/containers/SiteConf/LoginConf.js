import React from "react";
import {Route, Switch} from "react-router";
import Authentication from "../Authentication/Authentication";

const LoginConf = props => {
    return (
        <div>
            <Switch>
                <Route path="/studserviceapp/auth" component={Authentication}/>
            </Switch>
        </div>
    )
}

export default LoginConf