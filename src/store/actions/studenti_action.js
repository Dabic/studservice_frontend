import * as actionTypes from './actions'
import axios from "../../api/axios/axios";

export const getStudentiSuccess = (data) => {
    return {
        type: actionTypes.GET_STUDENTI_SUCCESS,
        studenti:data
    }
}
export const getStudentiFail = (error) => {
    return {
        type: actionTypes.GET_STUDENTI_FAIL,
        error: error
    }
}
export const getStudentiGrupeSuccess = (data) => {
    return {
        type: actionTypes.GET_STUDENTI_GRUPE_SUCCESS,
        studenti: data
    }
}
export const getStudentiGrupeFail = (error) => {
    return {
        type: actionTypes.GET_STUDENTI_GRUPE_FAIL,
        error: error
    }
}
export const getStudentiGodinaSuccess = (data) => {
    return {
        type: actionTypes.GET_STUDENTI_GODINA_SUCCESS,
        studenti: data
    }
}
export const getStudentiGodinaFail = (error) => {
    return {
        type: actionTypes.GET_STUDENTI_GODINA_FAIL,
        error: error
    }
}
export const getStudenti = () => {
    return dispatch => {
        axios.get('studenti/')
            .then(response => {
                dispatch(getStudentiSuccess(response.data))
            })
            .catch(error => {
                dispatch(getStudentiFail(error))
            })
    }
}
export const getStudentiGrupa = (grupa) => {
    return dispatch => {
        axios.get(`studenti/grupa/${grupa}`)
            .then(response => {
                dispatch(getStudentiGrupeSuccess(response.data))
            })
            .catch(error => {
                dispatch(getStudentiGrupeFail(error))
            })
    }
}
export const getStudentiGodina = (godina) => {
    return dispatch => {
        axios.get(`studenti/godina/${godina}`)
            .then(response => {
                dispatch(getStudentiGodinaSuccess(response.data))
            })
            .catch(error => {
                dispatch(getStudentiGodinaFail(error))
            })
    }
}