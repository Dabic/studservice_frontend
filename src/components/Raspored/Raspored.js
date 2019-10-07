import React, {useEffect, useState} from "react";
import {predavanjaColumns} from './columns/predavanjaColumns'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import {MDBDataTable} from "mdbreact";
import classes from './Raspored.module.css'
import SpinnerCircle from "../UI/Spinner/SpinnerCircle/SpinnerCircle";

const Raspored = (props) => {
    const [data, setData] = useState({columns: [], rows: []})
    const [loading, setLoading] = useState(true)
    const {tip, fetchRaspored} = props
    useEffect(() => {
        fetchRaspored(tip)
    }, [tip, fetchRaspored])
    useEffect(() => {
        switch (props.tip) {
            case 'predavanja':
                setData({columns: predavanjaColumns, rows: props.termini_predavanja})
                break
            case 'ispiti':
                setData({columns: predavanjaColumns, rows: props.termini_ispiti})
                break
            case 'kolokvijumi':
                setData({columns: predavanjaColumns, rows: props.termini_kolokvijumi})
                break
            default:
                setData({columns: [], rows: []})
            setLoading(false)
        }
    }, [props.termini_predavanja, props.termini_kolokvijumi, props.termini_ispiti, props.tip])
    let raspored = (
        <div>
            <p>Raspored ne postoji.</p>
        </div>
    )
    if(data.rows.length > 0){
        raspored = (
            <div className={classes.RasporedPredavanja}>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    responsive
                    pagesAmount={5}
                    data={data}
                />
            </div>
        )
    }else if(loading === true){
        raspored = (
            <SpinnerCircle/>
        )
    }
    return raspored
}
const mapStateToProps = state => {
    return {
        termini_predavanja: state.rasporedReducer.termini_predavanja,
        termini_kolokvijumi: state.rasporedReducer.termini_kolokvijumi,
        termini_ispiti: state.rasporedReducer.termini_ispiti
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchRaspored: (tip) => dispatch(actions.fetchRaspored(tip))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Raspored)