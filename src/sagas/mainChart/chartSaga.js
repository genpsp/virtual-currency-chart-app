import {LOAD_DATA, SET_DATA, setData} from "../../actions/mainChart/chartAction";
import {take, call, fork, put, takeLatest} from 'redux-saga/effects'
import API from '../../utils/api'

const api = new API()

function* fetchData() {
    while (true) {
        const action = yield take(LOAD_DATA)
        try {
            const data = yield call(api.loadData, null)
            console.log('saga: ' + data)
            yield put(
                setData(data)
            )
        } catch(e) {
            console.log(e)
        }
    }
}

const chartSaga = [
    fetchData()
]

export default chartSaga