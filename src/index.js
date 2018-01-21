import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './css/index.css';
import App from './App';
import registerServiceWorker from './serviceWorker/registerServiceWorker';
import configureStore from "./store/store";

const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

//service_worker
registerServiceWorker();


