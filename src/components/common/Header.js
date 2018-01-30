import React, {Component} from 'react'
import {Col, Row} from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <Row>
                <Col sm={7}>
                    <h1>Bitcoinチャート</h1>
                </Col>
                <Col sm={5}>
                    <h2>見出し</h2>
                </Col>
            </Row>
        )
    }
}