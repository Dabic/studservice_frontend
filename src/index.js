import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'


import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import ReduxThunk from 'redux-thunk'

import pageReducer from './store/reducers/page_reducer'
import authReducer from './store/reducers/auth_reducer'
import rasporedReducer from './store/reducers/raspored_reducer'
import grupaReducer from './store/reducers/grupe_reducer'
import studentiReducer from './store/reducers/studenti_reducer'
import predmetiReducer from './store/reducers/predmeti_reducer'
import emailReducer from './store/reducers/email_reducer'
import nalogReducer from './store/reducers/nalog_reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    pageReducer: pageReducer,
    authReducer: authReducer,
    rasporedReducer: rasporedReducer,
    grupaReducer: grupaReducer,
    studentiReducer: studentiReducer,
    predmetiReducer: predmetiReducer,
    emailReducer: emailReducer,
    nalogReducer: nalogReducer
})
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(ReduxThunk))
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
