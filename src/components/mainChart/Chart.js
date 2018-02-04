import React, {Component} from 'react'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

export default class Chart extends Component {
    componentDidMount(){
        this.props.initializeChartData()
    }

    render() {
        //チャートデータ
        let {data} = this.props
        let chartStyle = {
            border: '1px',
            width: '700px',
            height: '400px',
        }

        return(
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