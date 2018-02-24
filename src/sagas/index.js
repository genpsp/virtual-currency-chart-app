import {all} from "redux-saga/lib/internal/io";
import chartSaga from "./mainChart/chartSaga";
import pubnubSaga from "./pubnub/pubnubSaga";

export default function* rootSaga() {
    yield all([
        ...pubnubSaga,
        ...chartSaga,
    ])
}