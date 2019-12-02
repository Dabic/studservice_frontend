import * as actions from '../actions/actions'

const initialState = {
    categories: []
}
const getDisplayValuePair = (obj) => {
    let pair = []
    for(let i = 0; i < obj.length; i++){
        pair.push({display: obj[i], value: obj[i]})
    }
    return pair
}
const getCategoriesSuccess = (state, data) => {
    return {
        ...state,
        categories: getDisplayValuePair(data)
    }
}
const reducer = (state=initialState, action) => {
    if(action.type === actions.GET_CATEGORIES_SUCCESS)
        return getCategoriesSuccess(state, action.data)
    else
        return state
}

export default reducer