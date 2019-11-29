import React, {useEffect, useState} from "react";
import classes from './PregledIzbornihGrupa.module.css'
import Spisak from "../../../components/Pregled/Spisak/Spisak";
import PregledGrupaPoGodinama from "../../../components/Pregled/PregledGrupaPoGodinama/PregledGrupaPoGodinama";
import {Tab, Tabs} from "react-bootstrap";
import * as actions from '../../../store/actions'
import {connect} from 'react-redux'


const PregledIzbornihGrupa = props => {
    const [showIzmena, setShowIzmena] = useState(false)
    const [grupa, setGrupa] = useState({})
    const [key, setKey] = useState('po-godinama')
    const {getSveIzborne} = props
    useEffect(() => {
        getSveIzborne()
    }, [getSveIzborne])

    const grupaOnClick = (grupa) => {
        setGrupa(grupa)
        setShowIzmena(true)
    }
    const closeIzmena = () => {
        setShowIzmena(false)
    }
    return (
        <div>
            <Tabs id='controlled-tab-spisak-studenata' activeKey={key} onSelect={k => setKey(k)}>
                <Tab title='Po godinama' eventKey='po-godinama'>
                    <div className={classes.PregledIzbornihGrupa}>
                        < PregledGrupaPoGodinama tip='izborne' grupaOnClick={grupaOnClick}/>
                    </div>
                </Tab>
                <Tab title='Sve grupe' eventKey='sve-grupe'>
                    <div className={classes.PregledIzbornihGrupa}>
                        <Spisak grupaOnClick={grupaOnClick} vrsta='grupe'/>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getSveIzborne: () => dispatch(actions.getSveIzborne())
    }
}
export default connect(null, mapDispatchToProps)(PregledIzbornihGrupa)