import {
    INITIALIZE_CHART_DATA, LOAD_DATA, LOAD_MARKET, loadData, loadMarket,
    setData, setMarket
} from "../../actions/mainChart/chartAction";
import {take, call, put} from 'redux-saga/effects'
import API from '../../utils/api'
import {dateToFormatString} from "../../utils/common";


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
    let data, chartData
    while (true) {
        yield take(LOAD_DATA)
        try {
            data = yield call(api.loadData)
            chartData = _formatChartData(data)
            yield put(setData(chartData))
        } catch (e) {
            console.log(e)
        }
    }
}

export default chartSaga

//取得データを編集して返す
const _formatChartData = (data) => {
    let result
    let formedData

    formedData = data.Data.map((prot)=>{
        const formedTime = new Date(prot.time * 1000)
        const stringTime = dateToFormatString(formedTime, '%YYYY%/%MM%/%DD%')
        prot = {
            ...prot,
            time: stringTime,
        }
        return prot
    })

    result = {
        ...data,
        Data: formedData,
    }

    return result
}