import React, {Component} from 'react'
import {Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import ChartComponent from "../../components/mainChart/Chart";
import {addPubnubListener, initializePubnub, pubnubSubscribe} from "../../actions/pubnub/pubnubAction";
import {pubnubConst} from "../../constants/const";

class MainChart extends Component {
    constructor(props){
        super(props)
        this.props.initializePubnub()
        this.props.addPubnubListener()
        this.props.pubnubSubscribe(pubnubConst.PUBNUB_SUBKEY_BTC_JPY)
    }
    render() {
        return (
            <div className='MainChart'>
                <Row style={{margin: '0 auto'}}>
                    <Col sm={12}>
                        <ChartComponent/>
                    </Col>
                </Row>
            </div>
        )
    }
}

//connect
const mapStateToProps = (state) => {
    return{
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        initializePubnub: () => {
            dispatch(initializePubnub())
        },
        addPubnubListener: () => {
            dispatch(addPubnubListener())
        },
        pubnubSubscribe: (key) => {
            dispatch(pubnubSubscribe(key))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainChart)