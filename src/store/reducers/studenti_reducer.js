import * as actionTypes from '../actions/actions'

const initialState = {
    studenti_grupa: [],
    studenti_godina: [],
    svi_studenti: []
}
const getStudentiSuccess = (state, studenti) => {
    return {
        ...state,
        svi_studenti: studenti
    }
}
const getStudentiFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}
const getStudentiGodinaSuccess = (state, studenti) => {
    return {
        ...state,
        studenti_godina: studenti
    }
}
const getStudentiGodinaFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}
const getStudentiGrupeSuccess = (state, studenti) => {
    return {
        ...state,
        studenti_grupa: studenti
    }
}
const getStudentiGrupeFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_STUDENTI_SUCCESS:
            return getStudentiSuccess(state, action.studenti)
        case actionTypes.GET_STUDENTI_FAIL:
            return getStudentiFail(state, action.error)
        case actionTypes.GET_STUDENTI_GODINA_SUCCESS:
            return getStudentiGodinaSuccess(state, action.studenti)
        case actionTypes.GET_STUDENTI_GODINA_FAIL:
            return getStudentiGodinaFail(state, action.error)
        case actionTypes.GET_STUDENTI_GRUPE_SUCCESS:
            return getStudentiGrupeSuccess(state, action.studenti)
        case actionTypes.GET_STUDENTI_GRUPE_FAIL:
            return getStudentiGrupeFail(state, action.error)
        default:
            return state
    }
}

export default reducer