import React from "react";
import SideItem from "../SideItem/SideItem";

const AdminMenu = props => {
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
                isDropdown={true}
                faClass='fas fa-users'
                label='Grupe'
                onBackdropClicked={props.onBackdropClicked}
                items={[
                    {name: 'Unos izbornih grupa', path:'/studserviceapp/unos-izborne-grupe'},
                    {name: 'Pregled izbornih grupa', path:'/studserviceapp/pregled-izbornih-grupa'},
                    {name: 'Pregled izabranih grupa', path:'/studserviceapp/pregled-izabranih-grupa'}
                ]}
                clicked={props.handleDropdown}
                active={props.active === 'Grupe'}
                onDropdownClicked={props.onDropdownClicked}/>

            <SideItem
                isDropdown={true}
                faClass='fas fa-calendar-alt'
                label='Ucitavanje rasporeda'
                onBackdropClicked={props.onBackdropClicked}
                items={[
                    {name: 'Kolokvijumi i ispiti', path:'/'},
                    {name: 'Predavanja', path:'/'}
                ]}
                clicked={props.handleDropdown}
                active={props.active === 'Ucitavanje rasporeda'}
                onDropdownClicked={props.onDropdownClicked}/>

            <SideItem
                faClass='fas fa-envelope'
                label='E-mail'
                onBackdropClicked={props.onBackdropClicked}
                path='/studserviceapp/email'/>

            <SideItem
                faClass='fas fa-users-cog'
                label='Administracija'
                onBackdropClicked={props.onBackdropClicked}
                path='/admin'/>

            <SideItem
                isDropdown={true}
                faClass='fas fa-bell'
                label='Obavestenja'
                onBackdropClicked={props.onBackdropClicked}
                items={[
                    {name: 'Unos obavestenja', path:'/studserviceapp/unos-obavestenja'},
                    {name: 'Pregled obavestenja', path:'/studserviceapp/pregled-obavestenja'}
                ]}
                clicked={props.handleDropdown}
                active={props.active === 'Obavestenja'}
                onDropdownClicked={props.onDropdownClicked}/>
        </React.Fragment>
    )
}

export default AdminMenu