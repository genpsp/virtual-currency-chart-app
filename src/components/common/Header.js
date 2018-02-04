import React, {Component} from 'react'
import {Button, Col, Row} from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Row className='HeaderRow'>
                    <Col sm={7} style={{verticalAlign: 'middle'}}>
                        <h1>Bitcoinチャート.com</h1>
                    </Col>
                    <Col sm={5} style={{textAlign: 'right'}}>
                        <Button>default</Button>
                        <Button>default</Button>
                        <Button>default</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}