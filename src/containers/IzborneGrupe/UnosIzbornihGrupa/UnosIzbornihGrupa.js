import React, {useEffect, useState} from "react";
import classes from './UnosIzbornihGrupa.module.css'
import formState from './fromState/formState'
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Select/Select";
import SharableLists from "../../../components/UI/SharableLists/SharableLists";
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'
import RadioGroup from "../../../components/UI/RadioGroup/RadioGroup";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../api/axios/axios";
import Modal from "../../../components/UI/Modal/Modal";

const UnosIzbornihGrupa = props => {
    const [form, setForm] = useState(formState)
    const {getPredmeti} = {...props}
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [grupa, setGrupa] = useState({})
    useEffect(() => {
        getPredmeti()
    }, [getPredmeti])
    const remakePredmeti = (predmeti) => {
        const arr = []
        predmeti.forEach(predmet => {
            arr.push({
                value: predmet.naziv,
                display: predmet.naziv
            })
        })
        return arr
    }
    useEffect(() => {
        const updatedState = {...form}
        updatedState.predmeti.odabir_predmeta = remakePredmeti(props.svi_predmeti)
        setForm(updatedState)
    }, [props.svi_predmeti])

    const checkValidityElement = (updatedElement, val) => {
        let valid = true
        for(let key in updatedElement.requirements) {
            switch (key) {
                case 'isNumber':
                    valid =  !isNaN(val) && valid
                    break
                case 'isRequired':
                    valid = val !== '' && valid
                    break
                case 'isGroup':
                    const arr = val.split(',')

                    for (let i = 0; i < arr.length; i++) {
                        const gr = arr[i]
                        if (gr.length !== 3 || (gr[0] < 1 || gr[0] > 4)) {
                            valid = false
                            break
                        }
                    }
                    break
                case 'isYear':
                    valid = (!isNaN(val) && val.length === 4) && valid
                    break
                default:
                    return true
            }
        }
        return valid
    }
    const checkValidityForm = () => {
        let valid = true
        for(let key in form){
            if(form[key].shouldValidate)
                valid = form[key].valid && valid
        }
        return valid
    }
    const onChangeHandler = (id, val) => {
        const updatedState = {...form}
        const updatedElement = updatedState[id]
        updatedElement.value = val
        updatedElement.touched = true
        if(updatedElement.shouldValidate) {
            updatedElement.valid = checkValidityElement(updatedElement, val)
            if(updatedElement.valid && id === 'sk_pocetak') {
                updatedState['sk_kraj'].value = parseInt(updatedElement.value) + 1
                updatedState['sk_kraj'].valid = checkValidityElement(updatedState['sk_kraj'], (parseInt(updatedElement.value) + 1).toString())
            }
            else if(!updatedElement.valid && id === 'sk_pocetak')
                updatedState['sk_kraj'].value = ''
    }
        updatedState[id] = updatedElement
        setForm(updatedState)
        if(!checkValidityForm())
            setDisabled('Disabled')
        else
            setDisabled('Success')
    }
    const getOdabir = () => {
        const updatedState = {...form}
        return updatedState.predmeti.odabir_predmeta
    }
    const getOdabrani = () => {
        const updatedState = {...form}
        return updatedState.predmeti.odabrani_predmeti
    }
    const setOdabir = (options) => {
        const updatedState = {...form}
        updatedState.predmeti.odabir_predmeta = options
        setForm(updatedState)
    }
    const setOdabrani = (options) => {
        const updatedState = {...form}
        updatedState.predmeti.odabrani_predmeti = options
        setForm(updatedState)
    }
    const getAktivnost = () => {
        const state = {...form}
        return state.aktivnost
    }
    const setAktivnost = (aktivnost) => {
        const state = {...form}
        state.aktivnost = aktivnost
        setForm(state)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const newGrupa = {}
        newGrupa.semestar = form.semestar.value.value
        newGrupa.sk_pocetak = form.sk_pocetak.value
        newGrupa.sk_kraj = form.sk_kraj.value
        newGrupa.smer = form.smer.value.value
        newGrupa.grupe = form.oznaka_grupe.value
        newGrupa.kapacitet = form.kapacitet.value
        newGrupa.predmeti = form.predmeti.odabrani_predmeti
        newGrupa.aktivnost = form.aktivnost.value.value
        setGrupa(newGrupa)
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.post('unos-grupe/', newGrupa, options)
            .then(response => {
                setError(null)
                resetForm()
            })
            .catch(error => {
                setError(error.response.data.error)
            })
    }
    const resetForm = (event) => {
        console.log('a')

            event.preventDefault()
        const updatedForm = {...form}
        for (let key in updatedForm) {
            if (key === 'smer' || key === 'semestar') {
                updatedForm[key].value = updatedForm[key].defaultValue
            } else if (key === 'predmeti') {
                updatedForm[key].odabir_predmeta = remakePredmeti(props.svi_predmeti)
                updatedForm[key].odabrani_predmeti = []
            } else {
                updatedForm[key].value = ''
            }
        }
        console.log(updatedForm)
        setForm(updatedForm)
    }
    const frmArr = []
    for (let key in form) {
        frmArr.push({
            id: key,
            data: form[key]
        })
    }
    return (
        <form onSubmit={onSubmit} className={classes.UnosIzbornihGrupa}>
            {
                error !== null ?
                    <Modal show={true} modalClosed={() => setError(null)}>
                        {error}
                    </Modal>
                    :
                    null
            }
            {
                frmArr.map(formItem => {
                    switch (formItem.data.elementType) {
                        case 'input':
                            return <Input
                                key={formItem.id}
                                itemId={formItem.id}
                                label={formItem.data.label}
                                type={formItem.data.type}
                                touched={formItem.data.touched}
                                valid={formItem.data.valid}
                                value={formItem.data.value}
                                placeholder={formItem.data.placeholder}
                                onChange={onChangeHandler}/>
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
                                odabrani={formItem.data.odabrani_predmeti}
                                all={props.svi_predmeti}
                                fieldset={formItem.data.fieldset}
                                label={formItem.data.label}
                                setOdabir={setOdabir}
                                setOdabrani={setOdabrani}
                                getOdabir={getOdabir}
                                getOdabrani={getOdabrani}/>
                        case 'radio-group':
                            return <RadioGroup
                                key={formItem.id}
                                options={formItem.data.options}
                                fieldset={true}
                                label={formItem.data.label}
                                groupName={formItem.data.id}
                                setAktivnost={setAktivnost}
                                getAktivnost={getAktivnost}
                                onChangeHandler={onChangeHandler}/>
                        default:
                            return null
                    }
                })
            }
            <div className={classes.Buttons}>
                <Button clicked={onSubmit} buttonType={disabled}>UNESI</Button>
                <Button clicked={resetForm} buttonType='Danger'>RESET</Button>
            </div>
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