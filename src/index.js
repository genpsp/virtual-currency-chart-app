import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import './css/index.css';
import App from './App';
import registerServiceWorker from './serviceWorker/registerServiceWorker';
import configureStore from "./store/store";

const initialState = {}
const store = configureStore(initialState)
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

//service_worker
registerServiceWorker();


