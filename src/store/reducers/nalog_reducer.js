import * as actions from '../actions/actions'

const initialState = {
    nalozi: [],
    error: null
}
const getAllNaloziSuccess = (state, nalozi) => {
    return {
        ...state,
        nalozi: nalozi
    }
}
const getAllNaloziFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_NALOZI_SUCCESS:
            return getAllNaloziSuccess(state, action.data)
        case actions.GET_ALL_NALOZI_FAIL:
            return getAllNaloziFail(state, action.error)
        default:
            return state
    }
}

export default reducer