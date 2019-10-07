import * as actionTypes from './actions'
import axios from "../../api/axios/axios";

export const getAllPredmeti = (predmeti) => {
    return {
        type: actionTypes.GET_ALL_PREDMETI,
        predmeti: predmeti
    }
}

export const getPredmeti = () => {
    const options = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    return dispatch => {
        axios.get('predmeti/', options)
            .then(response => {
                dispatch(getAllPredmeti(response.data))
            })
    }
}