import React, {useEffect, useRef, useState} from "react";
import {email_form} from "./email_form_data";
import {formDataToArray} from "../../utils/formUtils/formUtils";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AttachFile from "./AttachFile/AttachFile";
import Select from "../UI/Select/Select";
import TagInput from "../UI/TagInput/TagInput";
import classes from './EmailForm.module.css'
import AttachItem from "./AttachFile/AttachItem/AttachItem";

const EmailForm = props => {
    const [formData, setFormData] = useState(email_form)
    const [formArray, setFormArray] = useState([])
    const [tagElements, setTagElements] = useState([])
    const [attachedFiles, setAttachedFiles] = useState([])
    const fileInput = useRef()
    useEffect(() => {
        if (props.categories.length > 0) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    typ: {
                        ...prevState.typ,
                        options: props.categories,
                        defaultValue: props.categories[0],
                        value: props.categories[0],
                        shouldValidate: true
                    }
                }
            })
            setFormArray(formDataToArray(formData))
        }
    }, [props.categories])
    const onChangeCategory = (id, option) => {
        switch (option.value) {
            case 'Pojedinacno':
                //setInputForPojedinacno()
                break
            case 'Po grupama':
                //setInputForGrupe()
                setTagElements(props.grupe)
                break
            case 'Po predmetima':
                //setInputForPredmeti()
                setTagElements(props.predmeti)
                break
            case 'Po godinama':
                //setInputForGodine()
                break
            case 'Po smeru':
                //setInputForSmer()
                break
            case 'Svi':
                //setInputForSvi()
                break
            default:
                break
        }
    }
    const setInputForPojedinacno = () => {
        const updatedState = {...formData}
        updatedState.to = {
            ...updatedState.to,
            elementType: 'input'
        }
        setFormData(updatedState)
        setFormArray(formDataToArray(updatedState))
    }
    const setInputForGrupe = () => {
        const updatedState = {...formData}
        updatedState.to = {
            ...updatedState.to,
            elementType: 'none'
        }
        setFormData(updatedState)
        setFormArray(formDataToArray(updatedState))
    }
    const setInputForPredmeti = () => {
        const updatedState = {...formData}
        updatedState.to = {
            ...updatedState.to,
            elementType: 'none'
        }
        setFormData(updatedState)
        setFormArray(formDataToArray(updatedState))
    }
    const setInputForSmer = () => {
        const updatedState = {...formData}
        updatedState.to = {
            ...updatedState.to,
            elementType: 'none'
        }
        setFormData(updatedState)
        setFormArray(formDataToArray(updatedState))
    }
    const setInputForSvi = () => {
        const updatedState = {...formData}
        updatedState.to = {
            ...updatedState.to,
            elementType: 'none'
        }
        setFormData(updatedState)
        setFormArray(formDataToArray(updatedState))
    }
    const setInputForGodine = () => {
        const updatedState = {...formData}
        updatedState.to = {
            ...updatedState.to,
            elementType: 'none'
        }
        setFormData(updatedState)
        setFormArray(formDataToArray(updatedState))
    }
    const changeHandler = (id, val) => {
        const updatedState = {...formData}
        updatedState[id].value = val
        setFormData(updatedState)
        setFormArray(formDataToArray(updatedState))
    }
    const onAttachFile = () => {
        fileInput.current.click()
    }
    const onFileAttached = (event) => {
        let file = event.target.value
        const files = [...attachedFiles]
        files.push(file)
        setAttachedFiles(files)
    }
    const deleteAttachedFile = (index) => {
        const newArray = [...attachedFiles]
        newArray.splice(index, 1)
        setAttachedFiles(newArray)
    }
    return (
        <form>
            {formArray.map((el, i) => {
                if (el.data.elementType === 'input')
                    return <Input key={i} type={el.data.type} placeholder={el.data.placeholder} value={el.data.value}/>
                else if(el.data.elementType === 'tag-input')
                    return <TagInput key={i} item_id={el.id} typ={el.data.type} onChange={changeHandler} placeholder={el.data.placeholder} elements={tagElements}/>
                else if (el.data.elementType === 'select')
                    return <Select
                        key={el.id}
                        showPlaceholder={true}
                        multiple={false}
                        noFilter={true}
                        options={el.data.options}
                        collapseContent={true}
                        onChangeHandler={onChangeCategory}/>
            })}
            <div>
                <input onChange={(event) => onFileAttached(event)} ref={fileInput} className={classes.EmailFormFileInput} type='file'/>
                {
                    attachedFiles.map((el, i) => {
                        let pathArr = el.split('\\')
                        let name = pathArr[pathArr.length-1]
                        return <AttachItem key={i} clicked={() => deleteAttachedFile(i)} path={el} name={name}/>
                    })
                }
            </div>
            <Button buttonType='Success'>POSALJI</Button>
            <AttachFile clicked={onAttachFile}/>
        </form>
    )
}

export default EmailForm