import * as actions from './actions'
import axios from "../../api/axios/axios";

const getCategoriesStart = () => {
    return {
        type: actions.GET_CATEGORIES_START
    }
}
const getCategoriesSuccess = (categories) => {
    return {
        type: actions.GET_CATEGORIES_SUCCESS,
        data: categories.data
    }
}
const getCategoriesFail = (error) => {
    return {
        type: actions.GET_CATEGORIES_FAIL,
        error: error
    }
}

export const getCategories = () => {
    return dispatch => {
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        dispatch(getCategoriesStart())
        axios.post('email-categories/', {}, options)
            .then(response => {
                dispatch(getCategoriesSuccess(response))
            })
            .catch(error => {
                dispatch(getCategoriesFail(error))
            })
    }
}