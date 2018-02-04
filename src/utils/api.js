
const baseUrl = 'https://api.bitflyer.jp/v1/'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export default class API {
    loadData = () => {
        console.log('api moving')
        const url = baseUrl + 'getmarkets'

        return fetch(proxyUrl+url, {
            method: 'GET',
            dataType: 'json',
        }).then((response) => {
            return response.json()
        }).then((json) => {
            console.log(json)
            return json
        })
    }
}