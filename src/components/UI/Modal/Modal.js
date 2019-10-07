import React from 'react'
import classes from './Modal.module.css'
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
    return (
        <React.Fragment>
            <Backdrop important={props.important} backdropClicked={props.modalClosed} show={props.show}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0
                }}>
                <div className={classes.ModalContent}>
                    <i onClick={props.modalClosed} className={['fas fa-times', classes.Exit].join(' ')} />
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal