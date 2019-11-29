import React, {useState} from "react";
import {formState} from './fromState/formState'
import {formDataToArray} from "../../../utils/formUtils/formUtils";
import Input from "../../../components/UI/Input/Input";
import classes from './UnosObavestenja.module.css'
import Button from "../../../components/UI/Button/Button";

const UnosObavestenja = props => {
    const [formData, setFormData] = useState(formState)
    const formArr = formDataToArray(formData)
    const onChangeHandler = (id, val) => {

    }
    return (
        <div className={classes.UnosObavestenja}>
            <form className={classes.UnosObavestenjaForm}>
                {
                    formArr.map(formItem => {
                        return <Input
                            key={formItem.id}
                            itemId={formItem.id}
                            label={formItem.data.label}
                            type={formItem.data.type}
                            value={formItem.data.value}
                            placeholder={formItem.data.placeholder}
                            onChange={onChangeHandler}/>
                    })
                }
                <div className={classes.ButtonContainer}>
                    <Button buttonType='Success'>UNESI</Button>
                    <Button buttonType='Danger'>RESET</Button>
                </div>
            </form>
        </div>
    )
}

export default UnosObavestenja