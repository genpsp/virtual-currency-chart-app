import {SET_PUBNUB} from "../../actions/pubnub/pubnubAction";

const initialState = {
    pubnub: null,
}

export const pubnubReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PUBNUB:
            return {
                ...state,
                pubnub: action.payload,
            }
        default:
            return state
    }
}