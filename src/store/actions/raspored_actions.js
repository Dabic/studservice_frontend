import * as actionTypes from './actions'
import axios from "../../api/axios/axios";

export const fetchRasporedStart = () => {
    return {
        type: actionTypes.FETCH_RASPORED_START
    }
}
export const fetchRasporedPredavanjaSuccess = (data) => {
    return {
        type: actionTypes.FETCH_RASPORED_PREDAVANJA_SUCCESS,
        termini: data
    }
}
export const fetchRasporedKolokvijumaSuccess = (data) => {
    return {
        type: actionTypes.FETCH_RASPORED_KOLOKVIJUMA_SUCCESS,
        termini: data
    }
}
export const fetchRasporedIspitaSuccess = (data) => {
    return {
        type: actionTypes.FETCH_RASPORED_ISPITA_SUCCESS,
        termini: data
    }
}
export const fetchRasporedFail = (error) => {
    return {
        type: actionTypes.FETCH_RASPORED_FAIL,
        error: error
    }
}
export const fetchRaspored = (tip) => {
    return dispatch => {
        dispatch(fetchRasporedStart())
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        if(tip === 'predavanja') {
            axios.get('raspored-predavanja/', options)
                .then(response => {
                    dispatch(fetchRasporedPredavanjaSuccess(response.data))
                })
                .catch(error => {
                    dispatch(fetchRasporedFail(error))
                })
        }else if(tip === 'kolokvijumi'){

        }else if(tip === 'ispiti'){

        }
    }
}