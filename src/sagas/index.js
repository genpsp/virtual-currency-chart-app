import {all} from "redux-saga/lib/internal/io";
import chartSaga from "./mainChart/chartSaga";

export default function* rootSaga() {
    yield all([
        ...chartSaga,
    ])
}