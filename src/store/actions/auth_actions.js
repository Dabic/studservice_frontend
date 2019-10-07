import * as actionTypes from './actions'
import axios from "../../api/axios/axios";

export const authWithGoogleSuccess = (data) => {
    return {
        type: actionTypes.AUTH_WITH_GOOGLE_SUCCESS,
        data: data
    }
}
export const authWithGoogleFail = (error) => {
    return {
        type: actionTypes.AUTH_WITH_GOOGLE_FAIL,
        error: error
    }
}
export const authWithServerSuccess = (data) => {
    return {
        type: actionTypes.AUTH_WITH_SERVER_SUCCESS,
        data: data
    }
}
export const authWithServerFail = (error) => {
    return {
        type: actionTypes.AUTH_WITH_SERVER_FAIL,
        error: error
    }
}
export const authWithServer = (token) => {
    return dispatch => {
        axios.post('/authorize/', {token: token})
            .then(response => {
                dispatch(authWithServerSuccess(response.data))
            })
            .catch(error => {
                dispatch(authWithServerFail('Izabrani google nalog ne postoji u RAF-ovoj bazi.'))
            })
    }
}
export const authAutoSetState = () => {
    return {
        type: actionTypes.AUTH_AUTO_SET_STATE
    }
}
export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}