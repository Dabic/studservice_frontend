import React, {useState} from "react";
import Select from "../Select/Select";
import classes from './SharableLists.module.css'
import Controls from "./Controls/Controls";
import Fieldset from "../Fieldset/Fieldset";

const SharableLists = props => {
    const [odabirSelected, setOdabirSelected] = useState([])
    const [odabraniSelected, setOdabraniSelected] = useState([])

    const containsPredmet = (predmeti, predmet) => {
        return predmeti.filter(predmetTemp => predmetTemp.value === predmet.value).length > 0
    }
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
    const onControlClicked = (event, type) => {
        event.preventDefault()
        let odabir
        let odabrani
        switch (type) {
            case 'ADD':
                odabrani = props.getOdabrani()
                odabrani = odabrani.concat(odabirSelected)
                props.setOdabrani(odabrani)

                odabir = props.getOdabir().filter(predmet => {
                    return !containsPredmet(odabrani, predmet)
                })
                props.setOdabir(odabir)
                setOdabirSelected([])
                break
            case 'REMOVE':
                odabir = props.getOdabir()
                odabir = odabir.concat(odabraniSelected)
                props.setOdabir(odabir)

                odabrani = props.getOdabrani().filter(predmet => {
                    return !containsPredmet(odabraniSelected, predmet)
                })
                props.setOdabrani(odabrani)
                setOdabraniSelected([])
                break
            case 'REMOVE_ALL':
                props.setOdabrani([])
                props.setOdabir(remakePredmeti(props.all))
                setOdabraniSelected([])
                break
            default:
                break
        }
    }
    const onOdabirChange = (options) => {
        setOdabirSelected(options)
    }
    const onOdabraniChange = (options) => {
        setOdabraniSelected(options)
    }
    return (
        props.fieldset === true ?
            <Fieldset legend={props.label}>
                <div className={classes.SharableLists}>
                    <Select
                        options={props.odabir}
                        noFilter={false}
                        showPlaceholder={false}
                        collapseContent={false}
                        selected={odabirSelected}
                        multiple={true}
                        emptyList={true}
                        onChangeHandler={onOdabirChange}/>
                    <Controls odabir={odabirSelected} selection={props.odabrani} odabrani={odabraniSelected}
                              clicked={onControlClicked}/>
                    <Select
                        options={props.odabrani}
                        noFilter={true}
                        showPlaceholder={false}
                        collapseContent={false}
                        selected={odabraniSelected}
                        multiple={true}
                        emptyList={true}
                        onChangeHandler={onOdabraniChange}/>
                </div>
            </Fieldset>
            :
            <div className={classes.SharableLists}>
                <Select
                    options={props.odabir}
                    noFilter={false}
                    showPlaceholder={false}
                    collapseContent={false}
                    selected={odabirSelected}
                    multiple={true}
                    emptyList={true}
                    onChangeHandler={onOdabirChange}/>
                <Controls odabir={odabirSelected} selection={props.odabrani} odabrani={odabraniSelected}
                          clicked={onControlClicked}/>
                <Select
                    options={props.odabrani}
                    noFilter={true}
                    showPlaceholder={false}
                    collapseContent={false}
                    selected={odabraniSelected}
                    multiple={true}
                    emptyList={true}
                    onChangeHandler={onOdabraniChange}/>
            </div>
    )
}

export default SharableLists