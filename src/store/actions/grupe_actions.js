import * as actionTypes from './actions'
import axios from "../../api/axios/axios";

export const getGrupeStart = () => {
    return {
        type: actionTypes.GET_GRUPE_START
    }
}
export const getGrupeSuccess = (grupe) => {
    return {
        type: actionTypes.GET_GRUPE_SUCCESS,
        grupe: grupe
    }
}
export const getGrupeFail = (error) => {
    return {
        type: actionTypes.GET_GRUPE_FAIL,
        error: error
    }
}
export const getIzborneStart = () => {
    return {
        type: actionTypes.GET_IZBORNE_START
    }
}
export const getIzborneSuccess = (grupe) => {
    return {
        type: actionTypes.GET_IZBORNE_SUCCESS,
        grupe: grupe
    }
}
export const getIzborneFail = (error) => {
    return {
        type: actionTypes.GET_IZBORNE_FAIL,
        error: error
    }
}
export const removeIzborna = (grupa) => {
    return dispatch => {
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.post('obrisi-grupu/', grupa, options)
            .then(response => {
                dispatch(getSveIzborne())
                dispatch(getIzborne(grupa.oznaka_grupe[0]))
            })
    }

}
export const getIzborneSveStart = () => {
    return {
        type: actionTypes.GET_IZBORNE_SVE_START
    }
}
export const getIzborneSveSuccess = (data) => {
    return {
        type: actionTypes.GET_IZBORNE_SVE_SUCCESS,
        grupe: data
    }
}
export const getIzborneSveFail = (error) => {
    return {
        type: actionTypes.GET_IZBORNE_SVE_FAIL,
        error: error
    }
}
export const getSveIzborne = () => {
    return dispatch => {
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        dispatch(getIzborneSveStart())
        axios.get(`izborne-grupe/`, options)
            .then(response => {
                dispatch(getIzborneSveSuccess(response.data))
            })
            .catch(error => {
                dispatch(getIzborneSveFail(error))
            })
    }
}
export const getIzborne = (godina) => {
    return dispatch => {
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        dispatch(getIzborneStart())
        axios.get(`izborne-grupe/${godina}/`, options)
            .then(response => {
                dispatch(getIzborneSuccess(response.data))
            })
            .catch(error => {
                dispatch(getIzborneFail(error))
            })
    }
}
export const getGrupe = (godina) => {
    return dispatch => {
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        dispatch(getGrupeStart())
        axios.get(`grupe/${godina}/`, options)
            .then(response => {
                dispatch(getGrupeSuccess(response.data))
            })
            .catch(error => {
                dispatch(getGrupeFail(error))
            })
    }
}