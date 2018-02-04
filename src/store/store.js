import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from '../reducers/index'
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
        applyMiddleware(sagaMiddleware),
    ))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore