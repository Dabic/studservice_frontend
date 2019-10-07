import React from "react";
import SideItem from "../SideItem/SideItem";

const NastavnikMenu = props => {
    return (
        <React.Fragment>
            <SideItem
                faClass='fas fa-school'
                label='Raspored'
                onBackdropClicked={props.onBackdropClicked}
                path='/studserviceapp'/>

            <SideItem
                faClass='fas fa-envelope'
                label='E-mail'
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

export default NastavnikMenu