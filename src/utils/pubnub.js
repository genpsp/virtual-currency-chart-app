import PubNub from 'pubnub'

const bitflyerSubKey = 'sub-c-52a9ab50-291b-11e5-baaa-0619f8945a4f'

export default class Pubnub {
    constructor(){
        this.pubnub = new PubNub({
            subscribeKey: bitflyerSubKey,
        })
    }
    addListener = () => {
        this.pubnub.addListener({
            message: (message) => {
                console.log('message came in: ', message)
            }
        })
    }
    subscribe = () => {
        this.pubnub.subscribe({channels: ['lightning_ticker_BTC_JPY']})
    }
    unsubscribe = () => {
        console.log("clicked!")
        this.pubnub.unsubscribe({channels: ['lightning_ticker_BTC_JPY']})
    }
}

