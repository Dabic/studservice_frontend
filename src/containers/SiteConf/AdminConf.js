import React from "react";
import {Route, Switch} from "react-router";
import MainContent from "../../components/UI/MainContent/MainContent";
import Navigation from "../../components/Navigation/Navigation";
import Home from "../Home/Home";
import SpisakStudenata from "../SpisakStudenata/SpisakStudenata";
import Logout from "../Authentication/Logout/Logout";
import PregledIzbornihGrupa from "../IzborneGrupe/PregledIzbornihGrupa/PregledIzbornihGrupa";
import UnosIzbornihGrupa from "../IzborneGrupe/UnosIzbornihGrupa/UnosIzbornihGrupa";
import UnosObavestenja from "../Obavestenja/UnosObavestenja/UnosObavestenja";
import Email from "../Email/Email";

const AdminConf = props => {
    return (
        <div>
            <Navigation/>
            <MainContent>
                <Switch>
                    <Route path='/studserviceapp' exact component={Home}/>
                    <Route path='/studserviceapp/spisak-studenata' component={SpisakStudenata}/>
                    <Route path='/studserviceapp/pregled-izbornih-grupa' component={PregledIzbornihGrupa} />
                    <Route path='/studserviceapp/unos-izborne-grupe' component={UnosIzbornihGrupa} />
                    <Route path='/studserviceapp/email' component={Email} />
                    <Route path='/studserviceapp/unos-obavestenja' component={UnosObavestenja} />
                    <Route path='/studserviceapp/logout' component={Logout}/>
                </Switch>
            </MainContent>
        </div>
    )
}

export default AdminConf