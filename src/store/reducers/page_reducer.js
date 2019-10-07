import * as actionTypes from '../actions/actions'

const initialState = {
    title: '',
    showSideNav: false
}
const onBurgerClicked = (state) => {
    const updatedState = {
        ...state
    }
    updatedState.showSideNav = !updatedState.showSideNav
    return updatedState
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_PAGE_LOAD:
            return {...state, title: action.title}
        case actionTypes.ON_BURGER_CLICKED:
            return onBurgerClicked(state)
        default:
            return state
    }
}

export default reducer