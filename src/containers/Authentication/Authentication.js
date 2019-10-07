import React, {useEffect, useState} from 'react'
import {GoogleLogin} from 'react-google-login'
import config from '../../config'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import Modal from "../../components/UI/Modal/Modal";

const Authentication = props => {
    const [show, setShow] = useState(false)
    const modalClosed = () => {
        setShow(false)
    }
    useEffect(() => {
        if(props.error !== null){
            setShow(true)
        }
    }, [props.error])
    return (
        <React.Fragment>
            <Modal show={show} modalClosed={modalClosed}>
                {props.error}
            </Modal>
            <GoogleLogin
                onSuccess={(response) => {
                    props.onGoogleSuccess(response)
                    props.onServerAuth(response.tokenId)
                }}
                onFailure={(error) => {
                    console.log(error)
                    props.onGoogleFail(error)
                }}
                clientId={config.GOOGLE_CLIENT_ID2} />
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGoogleSuccess: (data) => dispatch(actions.authWithGoogleSuccess(data)),
        onGoogleFail: (error) => dispatch(actions.authWithGoogleFail(error)),
        onServerAuth: (token) => dispatch(actions.authWithServer(token))
    }
}
const mapStateToProps = state => {
    return {
        error: state.authReducer.error
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authentication)