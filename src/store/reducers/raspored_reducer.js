import * as actionTypes from '../actions/actions'

const initialState = {
    termini_predavanja: [],
    termini_ispiti: [],
    termini_kolokvijumi: [],
    loading: false,
    error: null
}

const fetchRasporedPredavanjaSuccess = (state, termini) => {
    const updatedState = {
        ...state
    }
    const fetchedData = termini
    const updatedData = fetchedData.map(item => {
        const lastGroup = item.grupe[item.grupe.length - 1].oznaka_grupe
        delete item['id']
        return {
            ...item,
            grupe: item.grupe.reduce((result, grupa) => {
                return grupa.oznaka_grupe !== lastGroup ? result + grupa.oznaka_grupe + ', ' : result + grupa.oznaka_grupe
            }, '')
        }
    })
    updatedState.termini_predavanja = updatedData
    updatedState.loading = false
    return updatedState
}
const fetchRasporedStart = (state) => {
    const updatedState = {
        ...state
    }
    updatedState.loading = true
    return updatedState
}
const fetchRasporedFail = (state) => {
    const updatedState = {
        ...state
    }
    updatedState.error = 'Nesto je poslo naopako.\nMolimo Vas da prijavite ovaj problem studentskoj sluzi.'
    updatedState.loading = false
    return updatedState
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_RASPORED_PREDAVANJA_SUCCESS:
            return fetchRasporedPredavanjaSuccess(state, action.termini)
        case actionTypes.FETCH_RASPORED_ISPITA_SUCCESS:
            return state
        case actionTypes.FETCH_RASPORED_KOLOKVIJUMA_SUCCESS:
            return state
        case actionTypes.FETCH_RASPORED_START:
            return fetchRasporedStart(state)
        case actionTypes.FETCH_RASPORED_FAIL:
            return fetchRasporedFail(state)
        default:
            return state
    }
}

export default reducer