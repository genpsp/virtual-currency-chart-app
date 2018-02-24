import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {chartReducer} from "./mainChart/chartReducer";
import {pubnubReducer} from "./pubnub/pubnubReducer";

const reducers = {
    pubnubReducer,
    chartReducer,
}

export const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
})