const baseBitflyerUrl = 'https://api.bitflyer.jp/v1/' //ビットフライヤー
const baseCryptoCompareUrl = 'https://min-api.cryptocompare.com/'　//CryptoCompare
const proxyUrl = 'https://cors-anywhere.herokuapp.com/' //クロスドメイン制約回避のためのproxy

export default class API {
    //マーケット情報を取得
    loadMarket = () => {
        const targetUrl = baseBitflyerUrl + 'getmarkets'

        return fetch(proxyUrl + targetUrl, {
            method: 'GET',
            dataType: 'json',
        }).then((response) => {
            return response.json()
        }).then((json) => {
            console.log('recieved market: ')
            console.log(json)
            return json
        })
    }


    // チャートデータを取得
    loadData = () => {
        const targetUrl = baseCryptoCompareUrl + 'data/histohour?fsym=BTC&tsym=JPY&limit=100&e=bitFlyer'

        return fetch(proxyUrl + targetUrl, {
            method: 'GET',
            dataType: 'json',
        }).then((response) => {
            return response.json()
        }).then((json) => {
            console.log('recieved data: ')
            console.log(json)
            return json
        })
    }
}