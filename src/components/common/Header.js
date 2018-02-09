import React, {Component} from 'react'
import {Button, Col, Row} from "react-bootstrap";
import Pubnub from "../../utils/pubnub";

export default class Header extends Component {
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
                            onClick={pubnub.unsubscribe}
                        >
                            stopAPI
                        </Button>
                        <Button>default</Button>
                        <Button>default</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}