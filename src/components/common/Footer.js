import React, {Component} from 'react'
import {Row, Col} from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <Row className='FooterRow'>
                    <Col sm={12}>
                        footer
                    </Col>
                </Row>
            </div>
        )
    }
}