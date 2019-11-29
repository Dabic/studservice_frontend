import * as actions from '../actions/actions'

const initialState = {
    categories: [],
    predmeti: [],
    grupe: [],
    error: null,
    loading: false
}
const getDisplayValuePair = (obj) => {
    let pair = []
    for(let i = 0; i < obj.length; i++){
        pair.push({display: obj[i], value: obj[i]})
    }
    return pair
}

const getCategoriesStart = (state) => {
    return {
        ...state,
        loading: true
    }
}
const getCategoriesSuccess = (state, data) => {
    return {
        ...state,
        categories: getDisplayValuePair(data.categories),
        predmeti: data.predmeti,
        grupe: data.grupe,
        loading: false
    }
}
const getCategoriesFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.GET_CATEGORIES_START:
            return getCategoriesStart(state)
        case actions.GET_CATEGORIES_SUCCESS:
            return getCategoriesSuccess(state, action.data)
        case actions.GET_CATEGORIES_FAIL:
            return getCategoriesFail(state, action.error)
        default:
            return state
    }
}

export default reducer