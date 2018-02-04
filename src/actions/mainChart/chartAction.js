export const LOAD_DATA = 'LOAD_DATA'
export const SET_DATA = 'SET_DATA'

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