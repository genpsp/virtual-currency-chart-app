import React, {Component} from 'react'
import {Button, Col, Row} from "react-bootstrap";
import Pubnub from "../../utils/pubnub";
import {
    pubnubUnsubscribe
} from "../../actions/pubnub/pubnubAction";
import {connect} from "react-redux";
import {pubnubConst} from "../../constants/const";

class Header extends Component {
    render() {
        const pubnub = new Pubnub()

        return (
            <div className='Header'>
                <Row className='HeaderRow'>
                    <Col sm={7} style={{verticalAlign: 'middle'}}>
                        <h1>Bitcoinチャート.com</h1>
                    </Col>
                    <Col sm={5} style={{textAlign: 'right'}}>
                        <Button
                            text={'stopAPI'}
                            onClick={() => {
                                this.props.pubnubUnsubscribe(pubnubConst.PUBNUB_SUBKEY_BTC_JPY)
                            }}
                        />
                        <Button>default</Button>
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
        pubnubUnsubscribe: (key) => {
            dispatch(pubnubUnsubscribe(key))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)