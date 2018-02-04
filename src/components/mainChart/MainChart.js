import React, {Component} from 'react'
import {Row, Col} from "react-bootstrap";
import ChartContainer from "../../containers/mainChart/ChartContainer";

export default class MainChart extends Component {
    render() {
        return (
            <div className='MainChart'>
                <Row style={{margin: '0 auto'}}>
                    <Col sm={12}>
                        <ChartContainer/>
                    </Col>
                </Row>
            </div>
        )
    }
}