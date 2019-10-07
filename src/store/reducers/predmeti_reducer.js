import * as actionTypes from '../actions/actions'
const initialState = {
    predmeti: []
}

const getAllPredmeti = (state, predmeti) => {
    return {
        ...state,
        predmeti: predmeti
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PREDMETI:
            return getAllPredmeti(state, action.predmeti)
        default:
            return state
    }
}

export default reducer