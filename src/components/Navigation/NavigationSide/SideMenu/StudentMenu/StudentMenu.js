import React from "react";
import SideItem from "../SideItem/SideItem";

const StudentMenu = props => {
    return (
        <React.Fragment>
            <SideItem
                faClass='fas fa-school'
                label='Raspored'
                onBackdropClicked={props.onBackdropClicked}
                path='/studserviceapp'/>

            <SideItem
                faClass='fas fa-users'
                label='Izbor grupe'
                onBackdropClicked={props.onBackdropClicked}
                path='/studserviceapp/izbor-grupe'/>

            <SideItem
                faClass='fas fa-book-open'
                label='Nepolozeni predmeti'
                onBackdropClicked={props.onBackdropClicked}
                path='/'/>

            <SideItem
                faClass='fas fa-bell'
                label='Pregled obavestenja'
                onBackdropClicked={props.onBackdropClicked}
                path='/studserviceapp/pregled-obavestenja'/>

        </React.Fragment>
    )
}

export default StudentMenu