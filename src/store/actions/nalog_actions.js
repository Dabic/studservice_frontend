import axios from "../../api/axios/axios";
import * as actions from './actions'

const getAllNaloziSuccess = (nalozi) => {
    return {
        type: actions.GET_ALL_NALOZI_SUCCESS,
        data: nalozi
    }
}
const getAllNaloziFail = (error) => {
    return {
        type: actions.GET_ALL_NALOZI_FAIL,
        error: error
    }
}
export const getAllNalozi = () => {
    const options = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    return dispatch => {
        axios.post('get-nalozi/', options)
            .then(response => {
                dispatch(getAllNaloziSuccess(response.data))
            })
            .catch(error => {
                dispatch(getAllNaloziFail(error))
            })
    }
}