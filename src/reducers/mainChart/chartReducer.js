import {SET_DATA} from "../../actions/mainChart/chartAction";

const initialState = {
    data: [],
}

export const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}