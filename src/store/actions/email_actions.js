import * as actions from './actions'

const getCategoriesSuccess = (categories) => {
    return {
        type: actions.GET_CATEGORIES_SUCCESS,
        data: categories
    }
}

export const getCategories = () => {
    return dispatch => {
        const authenticatedAs = localStorage.getItem('authenticatedAs')
        if(authenticatedAs === 'Administrator')
            dispatch(getCategoriesSuccess([
                'Pojedinacno',
                'Po predmetima',
                'Po grupama',
                'Po smeru',
                'Po godinama',
                'Svi'
            ]))

    }
}