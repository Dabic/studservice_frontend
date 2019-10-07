import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import {Tab, Tabs} from "react-bootstrap";
import Raspored from "../../components/Raspored/Raspored";
import ObavestenjeSidebar from "../../components/Obavestenja/ObavestenjeSidebar/ObavestenjeSidebar";

const Home = props => {
    const [key, setKey] = useState('predavanja')
    useEffect(() => {
        props.onPageLoad('Raspored')
    })
    useEffect(() => {
        document.title = props.title
    }, [props.title])

    return (
        <div>
            <Tabs id='controlled-tab-raspored'  activeKey={key} onSelect={k =>  setKey(k)}>
                <Tab title='Predavanja' eventKey='predavanja'>
                    <Raspored tip='predavanja'/>
                </Tab>
                <Tab title='Kolokvijumi' eventKey='kolokvijumi'>
                    <Raspored tip='kolokvijumi'/>
                </Tab>
                <Tab title='Ispiti' eventKey='ispiti'>
                    <Raspored tip='ispiti'/>
                </Tab>
                {/*{*/}
                {/*    localStorage.getItem('authenticatedAs') === 'Student' ?*/}
                {/*        <Tab title='Moj raspored' eventKey='moj-raspored'>*/}
                {/*            <Raspored tip='moj-raspored'/>*/}
                {/*        </Tab>*/}
                {/*        :*/}
                {/*        null*/}
                {/*}*/}
                {/*{*/}
                {/*    localStorage.getItem('authenticatedAs') === 'Nastavnik' ?*/}
                {/*        <Tab title='Moj raspored' eventKey='moj-raspored'>*/}
                {/*            <Raspored tip='moj-raspored'/>*/}
                {/*        </Tab>*/}
                {/*        :*/}
                {/*        null*/}
                {/*}*/}
            </Tabs>
            <ObavestenjeSidebar/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        title: state.pageReducer.title
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPageLoad: (title) => dispatch(actions.onPageLoad(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)