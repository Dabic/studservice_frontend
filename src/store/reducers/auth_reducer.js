import * as actionTypes from '../actions/actions'

const initialState = {
    token: null,
    authenticatedAs: null,
    user: null,
    expiresIn: null,
    error: null,
    isAuthenticated: false,
    nalog: null
}
const setLocalStorage = (tok, is, as, usr, nlg) => {
    localStorage.setItem('token', tok.toString())
    localStorage.setItem('isAuthenticated', is.toString())
    localStorage.setItem('authenticatedAs', as.toString())
    localStorage.setItem('user', JSON.stringify(usr))
    localStorage.setItem('nalog', JSON.stringify(nlg))
}
const authWithServerSuccess = (state, data) => {
    const updatedState = {
        ...state
    }
    updatedState.token = data.token
    updatedState.authenticatedAs = data.authenticatedAs
    updatedState.user = data.user
    updatedState.isAuthenticated = true
    updatedState.nalog = data.nalog
    console.log(data.nalog)
    setLocalStorage(data.token, true, data.authenticatedAs, data.user, data.nalog)
    return updatedState
}
const authWithServerFail = (state, error) => {
    const updatedState = {
        ...state
    }
    updatedState.error = error
    return updatedState
}
const authWithGoogleSuccess = (state, data) => {
    const updatedState = {
        ...state
    }
    updatedState.expiresIn = data.tokenObj.expires_in
    updatedState.token = data.tokenObj.id_token
    localStorage.setItem('token', data.tokenObj.id_token)
    localStorage.setItem('expiresIn', data.tokenObj.expires_in)
    return updatedState
}
const authWithGoogleFail = (state, error) => {
    const updatedState = {
        ...state
    }
    updatedState.error = 'Google autentifikacija nije uspesna.'
    return updatedState
}
const authAutoSetState = (state) => {
    const updatedState = {
        ...state
    }
    if(localStorage.getItem('isAuthenticated') === 'true'){
        updatedState.isAuthenticated = true
        updatedState.token = localStorage.getItem('token')
        updatedState.user = JSON.parse(localStorage.getItem('user'))
        updatedState.authenticatedAs = localStorage.getItem('authenticatedAs')
        updatedState.expiresIn = localStorage.getItem('expiresIn')
        updatedState.nalog = JSON.parse(localStorage.getItem('nalog'))
    }
    return updatedState
}
const authLogout = (state) => {
    localStorage.removeItem('token')
    localStorage.removeItem('authenticatedAs')
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('nalog')
    const updatedState = {
        ...state
    }
    updatedState.isAuthenticated = null
    updatedState.authenticatedAs = null
    updatedState.expiresIn = null
    updatedState.user = null
    updatedState.token = null
    updatedState.nalog = null
    updatedState.error = null
    return updatedState
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_WITH_SERVER_SUCCESS:
            return authWithServerSuccess(state, action.data)
        case actionTypes.AUTH_WITH_SERVER_FAIL:
            return authWithServerFail(state, action.error)
        case actionTypes.AUTH_WITH_GOOGLE_SUCCESS:
            return authWithGoogleSuccess(state, action.data)
        case actionTypes.AUTH_WITH_GOOGLE_FAIL:
            return authWithGoogleFail(state, action.error)
        case actionTypes.AUTH_AUTO_SET_STATE:
            return authAutoSetState(state)
        case actionTypes.AUTH_LOGOUT:
            return authLogout()
        default:
            return state
    }
}

export default reducer