import React, {Component} from 'react'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {connect} from "react-redux";
import {initializeChartData} from "../../actions/mainChart/chartAction";

class Chart extends Component {
    componentDidMount() {
        this.props.initializeChartData()
    }

    render() {
        let {
            data,
        } = this.props

        let chartStyle = {
            border: '1px',
            width: '100%',
            height: '600px',
            fontSize: '70%',
        }

        return (
            <div className='Chart' style={chartStyle}>
                <ResponsiveContainer>
                    <LineChart
                        data={data.Data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="time" interval={10}/>
                        <YAxis />
                        <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
                        <Tooltip offset={20} isAnimationActive={false}/>
                        <Line type='natural' dataKey="close" stroke="#8884d8" dot={{strokeWidth: 1, r: 1.5}}/>
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
