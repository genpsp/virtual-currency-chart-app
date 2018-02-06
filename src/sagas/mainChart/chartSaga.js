import {
    INITIALIZE_CHART_DATA, LOAD_DATA, LOAD_MARKET, loadData, loadMarket,
    setData, setMarket
} from "../../actions/mainChart/chartAction";
import {take, call, put} from 'redux-saga/effects'
import API from '../../utils/api'

const api = new API()
const chartSaga = [
    fetchData(),
    fetchMarket(),
    fetchInitialData(),
]

//チャートデータの初期化
function* fetchInitialData() {
    while (true) {
        yield take(INITIALIZE_CHART_DATA)
        try {
            yield put(loadData())
            yield put(loadMarket())
        } catch (e) {
            console.log(e)
        }
    }
}

//マーケット情報の取得
function* fetchMarket() {
    let market
    while(true){
        yield take(LOAD_MARKET)
        try{
            market = yield call(api.loadMarket)
            yield put(setMarket(market))
        }catch (e){
            console.log(e)
        }
    }
}

//チャートデータの取得
function* fetchData() {
    let data
    while (true) {
        yield take(LOAD_DATA)
        try {
            data = yield call(api.loadData)
            yield put(setData(data))
        } catch (e) {
            console.log(e)
        }
    }
}

export default chartSaga