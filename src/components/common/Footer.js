import React, {Component} from 'react'
import {Row, Col} from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <Row>
                    <Col sm={12} style={{border: 'solid 1px'}}>
                        footer
                    </Col>
                </Row>
            </div>
        )
    }
}