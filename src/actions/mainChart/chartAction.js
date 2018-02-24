export const LOAD_DATA = 'LOAD_DATA'
export const SET_DATA = 'SET_DATA'
export const INITIALIZE_CHART_DATA = 'INITIALIZE_CHART_DATA'
export const LOAD_MARKET = 'LOAD_MARKET'
export const SET_MARKET = 'SET_MARKET'
export const ADD_DATA = 'ADD_DATA'

export const initializeChartData = () => {
    return {
        type: INITIALIZE_CHART_DATA,
    }
}
export const loadMarket = () => {
    return {
        type: LOAD_MARKET,
    }
}
export const setMarket = (market) => {
    return {
        type: SET_MARKET,
        payload: market,
    }
}
export const loadData = () => {
    return{
        type: LOAD_DATA,
    }
}
export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data,
    }
}
export const addData = (plot) => {
    return {
        type: ADD_DATA,
        payload: plot,
    }
}