"use strict";
import React, {Component} from 'react';
import {Grid, Col} from "react-bootstrap";
import './css/App.css';
import MainChartContainer from "./containers/mainChart/MainChartContainer";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SideMenu from "./components/common/SideMenu";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid fluid={true}>
                    <Header/>
                    <Col sm={10} style={{border: 'solid 1px'}}>
                        <MainChartContainer/>
                    </Col>
                    <Col sm={2} style={{border: 'solid 1px'}}>
                        <SideMenu/>
                    </Col>
                    <Footer/>
                </Grid>
            </div>
        )
    }
}