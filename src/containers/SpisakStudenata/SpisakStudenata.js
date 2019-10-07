import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import PregledGrupaPoGodinama from "../../components/Pregled/PregledGrupaPoGodinama/PregledGrupaPoGodinama";
import classes from './SpisakStudenata.module.css'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import Spisak from "../../components/Pregled/Spisak/Spisak";

const SpisakStudenata = props => {
    const [key, setKey] = useState('po-grupama')
    const [showStudenti, setShowStudenti] = useState(false)
    const [grupa, setGrupa] = useState({})
    const {getStudenti} = props
    useEffect(() => {
        getStudenti()
        console.log('a')
    }, [getStudenti])

    const grupaOnClick = (grupa) => {
        props.getStudentiGrupa(grupa.oznaka_grupe)
        setGrupa(grupa)
        setShowStudenti(true)
    }
    const closeSpisak = () => {
        setShowStudenti(false)
    }
    return (
        <div>
            <Tabs id='controlled-tab-spisak-studenata' activeKey={key} onSelect={k =>  setKey(k)}>
                <Tab title='Po grupama' eventKey='po-grupama'>
                    <div className={classes.SpisakStudenata}>
                        {
                            showStudenti ?
                                <Spisak onBackClicked={closeSpisak} vrsta='studenti' tip='po-grupama' backButton={true}/>
                                :
                                < PregledGrupaPoGodinama grupaOnClick = {grupaOnClick}/>
                        }
                    </div>
                </Tab>
                {/*<Tab title='Po godinama' eventKey='po-godinama'>*/}
                {/*    <div className={classes.SpisakStudenata}>*/}
                {/*        <Spisak backButton={false}/>*/}
                {/*    </div>*/}
                {/*</Tab>*/}
                {/*<Tab title='Sve grupe' eventKey='sve-grupe'>*/}
                {/*    <div className={classes.SpisakStudenata}>*/}
                {/*        /!*<Studenti svi={true}/>*!/*/}
                {/*    </div>*/}
                {/*</Tab>*/}
                <Tab title='Svi studenti' eventKey='svi-studenti'>
                    <div className={classes.SpisakStudenata}>
                        {/*<Studenti svi={true}/>*/}
                        <Spisak vrsta='studenti' tip='svi-studenti'/>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getStudenti: () => dispatch(actions.getStudenti()),
        getStudentiGodina: (godina) => dispatch(actions.getStudenti(godina)),
        getStudentiGrupa: (grupa) => dispatch(actions.getStudentiGrupa(grupa))
    }
}
export default connect(null, mapDispatchToProps)(SpisakStudenata)