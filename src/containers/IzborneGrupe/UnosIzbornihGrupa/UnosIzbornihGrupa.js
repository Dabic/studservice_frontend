import React, {useEffect, useState} from "react";
import classes from './UnosIzbornihGrupa.module.css'
import frmArr from './fromState/formState'
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Select/Select";
import SharableLists from "../../../components/UI/SharableLists/SharableLists";
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

const UnosIzbornihGrupa = props => {
    const [form, setForm] = useState(frmArr)
    useEffect(() => {
        props.getPredmeti()
    }, [])
    useEffect(() => {
        const updatedState = [...form]
        const predmeti = []
        for(let i = 0; i < props.svi_predmeti.length; i++){
            predmeti.push({
                value: props.svi_predmeti[i].naziv,
                display: props.svi_predmeti[i].naziv,
            })
        }
        for(let i = 0; i < updatedState.length; i++){
            if(updatedState[i].id === 'predmeti'){
                updatedState[i].data.odabir_predmeta = predmeti
            }
        }
        setForm(updatedState)
    }, [props.svi_predmeti])
    const onChangeHandler = (id, val) => {
        const updatedState = [...form]
        for(let i = 0; i < updatedState.length; i++){
            if(updatedState[i].id === id){
                updatedState[i].value = val
                break
            }
        }
    }
    return (
        <form className={classes.UnosIzbornihGrupa}>
            {console.log(frmArr)}
            {
                form.map(formItem => {
                    switch (formItem.data.elementType) {
                        case 'input':
                            return <Input
                                key={formItem.id}
                                label={formItem.data.label}
                                type={formItem.data.type}
                                value={formItem.data.value}
                                placeholder={formItem.data.placeholder}/>
                        case 'select':
                            return <Select
                                onChangeHandler={onChangeHandler}
                                itemId={formItem.id}
                                key={formItem.id}
                                label={formItem.data.label}
                                showPlaceholder={true}
                                multiple={false}
                                noFilter={true}
                                options={formItem.data.options}
                                collapseContent={true}
                                defaultValue={formItem.data.value}/>
                        case 'sharable-lists':
                            return <SharableLists
                                key={formItem.id}
                                itemId={formItem.id}
                                odabir={formItem.data.odabir_predmeta}
                                odabrani={formItem.data.odabrani_predmeti}/>
                        case 'radio-group':
                            return null
                        default:
                            return null
                    }
                })
            }
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getPredmeti: () => dispatch(actions.getPredmeti())
    }
}
const mapStateToProps = state => {
    return {
        svi_predmeti: state.predmetiReducer.predmeti
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UnosIzbornihGrupa)