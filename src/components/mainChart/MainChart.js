import React, {Component} from 'react'
import {Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import ChartComponent from "../../components/mainChart/Chart";

class MainChart extends Component {
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