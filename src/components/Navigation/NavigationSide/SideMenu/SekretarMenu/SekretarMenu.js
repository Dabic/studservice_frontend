import React from "react";
import SideItem from "../SideItem/SideItem";

const SekretarMenu = props => {
    return (
        <React.Fragment>
            <SideItem
                faClass='fas fa-school'
                label='Raspored'
                onBackdropClicked={props.onBackdropClicked}
                path='/studserviceapp' />

            <SideItem
                faClass='fas fa-graduation-cap'
                label='Spisak studenata'
                onBackdropClicked={props.onBackdropClicked}
                path='/studserviceapp/spisak-studenata'/>

            <SideItem
                faClass='fas fa-users'
                label='Pregled izabranih grupa'
                onBackdropClicked={props.onBackdropClicked}
                clicked={props.handleDropdown}/>

            <SideItem
                faClass='fas fa-envelope'
                label='E-mail'
                onBackdropClicked={props.onBackdropClicked}
                path='/'/>

            <SideItem
                isDropdown={true}
                faClass='fas fa-bell'
                label='Obavestenja'
                onBackdropClicked={props.onBackdropClicked}
                listItems={[
                    {name: 'Unos obavestenja', path:'/studserviceapp/unos-obavestenja'},
                    {name: 'Pregled obavestenja', path:'/studserviceapp/pregled-obavestenja'}
                ]}
                clicked={props.handleDropdown}
                active={props.active === 'Obavestenja'}
                onDropdownClicked={props.onDropdownClicked}/>
        </React.Fragment>
    )
}

export default SekretarMenu