import React, {Component} from 'react'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {connect} from "react-redux";
import {initializeChartData} from "../../actions/mainChart/chartAction";

class Chart extends Component {
    componentDidMount() {
        this.props.initializeChartData()
    }

    render() {
        let {
            data,
            chartData,
        } = this.props

        let chartStyle = {
            border: '1px',
            width: '100%',
            height: '400px',
            fontSize: '70%',
        }

        return (
            <div className='Chart' style={chartStyle}>
                <ResponsiveContainer>
                    <LineChart data={data.Data}>
                        <XAxis dataKey="time"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="close" stroke="#8884d8"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

//connect
const mapStateToProps = (state) => {
    return {
        market: state.chartReducer.market,
        data: state.chartReducer.data,
        chartData: state.chartReducer.chartData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initializeChartData: () => {
            dispatch(initializeChartData())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chart)
