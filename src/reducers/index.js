import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {chartReducer} from "./mainChart/chartReducer";

const reducers = {
    chartReducer,
}

export const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
})