import React, {useRef} from 'react'
import AccountCredentials from "./AccountCredentials/AccountCredentials";
import AccountInfo from "./AccountInfo/AccountInfo";
import infoClasses from './AccountInfo/AccountInfo.module.css'

const AccountItem = props => {
    const infoRef = useRef(null)
    const credRef = useRef(null)
    const onCredentialsClicked = () => {
        if(infoRef.current.classList.contains(infoClasses.Display)){
            infoRef.current.classList.remove(infoClasses.Display)
        }else{
            infoRef.current.classList.add(infoClasses.Display)
        }
    }
    const closeInfo = (event) => {
        const clickedItem = event.target
        if(clickedItem !== credRef.current && !credRef.current.contains(clickedItem)){
            if(clickedItem !== infoRef.current && !infoRef.current.contains(clickedItem)){
                infoRef.current.classList.remove(infoClasses.Display)
            }
        }
    }
    return (
        <React.Fragment>
            <AccountCredentials refprop={credRef} clicked={onCredentialsClicked}/>
            <AccountInfo closeInfo={closeInfo} refprop={infoRef}/>
        </React.Fragment>
    )
}

export default AccountItem