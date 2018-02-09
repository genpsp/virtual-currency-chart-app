import React, {Component} from 'react'
import {Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import ChartComponent from "../../components/mainChart/Chart";
import {subscribePubNub} from "../../utils/pubnub";
import Pubnub from "../../utils/pubnub";

class MainChart extends Component {
    constructor(props){
        super(props)
        const pubnub = new Pubnub()
        pubnub.addListener()
        pubnub.subscribe()
        pubnub.unsubscribe()
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainChart)