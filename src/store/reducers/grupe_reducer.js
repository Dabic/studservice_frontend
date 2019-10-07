import * as actionTypes from '../actions/actions'

const initialState = {
    grupe: [],
    izborne_grupe: [],
    error: null,
    sve_izborne_grupe: [],
    loading: false
}
const getGrupeStart = (state) => {
    return {
        ...state,
        loading: true
    }
}
const getGrupeSuccess = (state, grupe) => {
    return {
        ...state,
        grupe: grupe,
        error: null,
        loading: false
    }
}
const getGrupeFail = (state) => {
    return {
        ...state,
        error: 'Nije moguce dohvatiti grupe.',
        loading: false
    }
}
const getIzborneStart = (state) => {
    return {
        ...state,
        loading: true
    }
}
const getIzborneSuccess = (state, grupe) => {
    return {
        ...state,
        izborne_grupe: grupe,
        error: null,
        loading: false
    }
}
const getIzborneFail = (state) => {
    return {
        ...state,
        error: 'Nije moguce dohvatiti grupe.',
        loading: false
    }
}
const getIzborneSveStart = (state) => {
    return {
        ...state,
        loading: true
    }
}
const getIzborneSveSuccess = (state, grupe) => {
    return {
        ...state,
        sve_izborne_grupe: grupe,
        loading: false
    }
}
const getIzborneSveFail = (state, error) => {
    return {
        ...state,
        error: error,
        loading: false
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_GRUPE_START:
            return getGrupeStart(state)
        case actionTypes.GET_GRUPE_SUCCESS:
            return getGrupeSuccess(state, action.grupe)
        case actionTypes.GET_GRUPE_FAIL:
            return getGrupeFail(state)
        case actionTypes.GET_IZBORNE_START:
            return getIzborneStart(state)
        case actionTypes.GET_IZBORNE_SUCCESS:
            return getIzborneSuccess(state, action.grupe)
        case actionTypes.GET_IZBORNE_FAIL:
            return getIzborneFail(state)
        case actionTypes.GET_IZBORNE_SVE_START:
            return getIzborneSveStart(state)
        case actionTypes.GET_IZBORNE_SVE_SUCCESS:
            return getIzborneSveSuccess(state, action.grupe)
        case actionTypes.GET_IZBORNE_SVE_FAIL:
            return getIzborneSveFail(state, action.error)
        default:
            return state
    }
}

export default reducer