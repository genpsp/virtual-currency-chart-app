import {
    INITIALIZE_PUBNUB,
    ADD_PUBNUB_LISTENER,
    PUBNUB_SUBSCRIBE,
    PUBNUB_UNSUBSCRIBE,
    setPubnub
} from "../../actions/pubnub/pubnubAction";
import {take, call, put} from 'redux-saga/effects'
import PubNub from 'pubnub'
import {select} from "redux-saga/effects";

const bitflyerSubKey = 'sub-c-52a9ab50-291b-11e5-baaa-0619f8945a4f'
const pubnubSaga = [
    initializePubnub(),
    addPubnubListener(),
    pubnubSubscribe(),
    pubnubUnsubscribe(),
]
//selector
const getStatePubnub = (state) => state.pubnubReducer.pubnub

//PubNubの初期化
function* initializePubnub() {
    let pubnub
    while (true) {
        yield take(INITIALIZE_PUBNUB)
        try {
            pubnub = new PubNub({
                subscribeKey: bitflyerSubKey,
            })
            yield put(setPubnub(pubnub))
        } catch (e) {
            console.log(e)
        }
    }
}

//PubNubリスナーの追加
function* addPubnubListener() {
    let pubnubState;
    while (true) {
        yield take(ADD_PUBNUB_LISTENER)
        try {
            pubnubState = yield select(getStatePubnub)
            pubnubState.addListener({
                message: (message) => {
                    console.log(message)
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
}

//PubNub受信
function* pubnubSubscribe() {
    let pubnubState;
    while (true) {
        const action = yield take(PUBNUB_SUBSCRIBE)
        try {
            pubnubState = yield select(getStatePubnub)
            pubnubState.subscribe({
                channels: [action.payload]
            })
            console.log('subscribe start')
        } catch (e) {
            console.log(e)
        }
    }
}

//PubNub受信停止
function* pubnubUnsubscribe() {
    let pubnubState;
    while (true) {
        const action = yield take(PUBNUB_UNSUBSCRIBE)
        try {
            pubnubState = yield select(getStatePubnub)
            pubnubState.unsubscribe({
                channels: [action.payload]
            })
            console.log('subscribe stop')
        } catch (e) {
            console.log(e)
        }
    }
}

export default pubnubSaga