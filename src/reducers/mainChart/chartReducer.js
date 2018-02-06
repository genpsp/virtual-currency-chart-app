import {SET_DATA, SET_MARKET} from "../../actions/mainChart/chartAction";

const initialState = {
    market: [],
    data: {},
    chartData: [],
}

export const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case SET_MARKET:
            return {
                ...state,
                market: action.payload,
            }
        default:
            return state
    }
}