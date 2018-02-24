export const INITIALIZE_PUBNUB = 'INITIALIZE_PUBNUB'
export const SET_PUBNUB = 'SET_PUBNUB'
export const ADD_PUBNUB_LISTENER = 'ADD_PUBNUB_LISTENER'
export const PUBNUB_SUBSCRIBE = 'PUBNUB_SUBSCRIBE'
export const PUBNUB_UNSUBSCRIBE = 'PUBNUB_UNSUBSCRIBE'

export const initializePubnub = () => {
    return {
        type: INITIALIZE_PUBNUB,
    }
}
export const setPubnub = (newPubnub) => {
    return {
        type: SET_PUBNUB,
        payload: newPubnub,
    }
}
export const addPubnubListener = () => {
    return {
        type: ADD_PUBNUB_LISTENER,
    }
}
export const pubnubSubscribe = (key) => {
    return {
        type: PUBNUB_SUBSCRIBE,
        payload: key,
    }
}
export const pubnubUnsubscribe = (key) => {
    return {
        type: PUBNUB_UNSUBSCRIBE,
        payload: key,
    }
}
