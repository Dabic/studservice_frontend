import * as actionTypes from './actions'

export const onPageLoad = (title) => {
    return {
        type: actionTypes.ON_PAGE_LOAD,
        title: title
    }
}
export const onBurgerClicked = () => {
    return {
        type: actionTypes.ON_BURGER_CLICKED
    }
}