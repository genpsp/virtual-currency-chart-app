"use strict";
import React, { Component } from 'react';
import './css/App.css';
import MainChartContainer from "./containers/mainChart/MainChartContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MainChartContainer />
      </div>
    );
  }
}