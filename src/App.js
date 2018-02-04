"use strict";
import React, {Component} from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import './css/App.css';
import MainChartContainer from "./containers/mainChart/MainChartContainer";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SideMenu from "./components/common/SideMenu";

export default class App extends Component {
    render() {
        return (
            <div className="App" >
                <Grid fluid={true} >
                    <Header/>
                    <Row>
                        <Col sm={9} style={{border: 'solid 1px #c6d5dc'}}>
                            <MainChartContainer/>
                        </Col>
                        <Col sm={3} style={{border: 'solid 1px #c6d5dc'}}>
                            <SideMenu/>
                        </Col>
                    </Row>
                    <Footer/>
                </Grid>
            </div>
        )
    }
}