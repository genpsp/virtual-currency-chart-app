import React, {Component} from 'react'
import {Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

export default class Chart extends Component {
    data = [
        {name: 'Page A', uv: 4000},
        {name: 'Page B', uv: 3000},
        {name: 'Page C', uv: 2000},
        {name: 'Page D', uv: 2780},
        {name: 'Page E', uv: 1890},
        {name: 'Page F', uv: 2390},
        {name: 'Page G', uv: 3490},
    ]

    chartStyle = {
        border: '1px',
        width: '600px',
        height: '400px',
    }

    render() {
        return(
            <div className='Chart' style={this.chartStyle}>
                <ResponsiveContainer>
                <LineChart data={this.data}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}