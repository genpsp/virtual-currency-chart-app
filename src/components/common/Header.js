import React, {Component} from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {
    pubnubSubscribe,
    pubnubUnsubscribe
} from "../../actions/pubnub/pubnubAction";
import {connect} from "react-redux";
import {pubnubConst} from "../../constants/const";

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Row className='HeaderRow'>
                    <Col sm={7} style={{verticalAlign: 'middle'}}>
                        <h1>Bitcoinチャート.com</h1>
                    </Col>
                    <Col sm={5} style={{textAlign: 'right'}}>
                        <Button
                            onClick={() => {
                                this.props.pubnubUnsubscribe(pubnubConst.PUBNUB_SUBKEY_BTC_JPY)
                            }}
                        >
                        stopAPI
                        </Button>
                        <Button
                            onClick={() => {
                                this.props.pubnubSubscribe(pubnubConst.PUBNUB_SUBKEY_BTC_JPY)
                            }}
                        >startAPI</Button>
                        <Button>default</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

//connect
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        pubnubSubscribe: (key) => {
            dispatch(pubnubSubscribe(key))
        },
        pubnubUnsubscribe: (key) => {
            dispatch(pubnubUnsubscribe(key))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)