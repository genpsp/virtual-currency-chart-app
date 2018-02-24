import {SET_DATA, ADD_DATA,  SET_MARKET} from "../../actions/mainChart/chartAction";

const initialState = {
    market: [],
    data: {},
}

export const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case ADD_DATA:
            if(state.data.Data){
                const newPlot = {
                    time: action.payload.message.timestamp,
                    close: action.payload.message.ltp,
                }
                return {
                    ...state,
                    data: {
                        ...state.data,
                        Data: state.data.Data.concat(newPlot),
                    }
                }
            }else{
                return state
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