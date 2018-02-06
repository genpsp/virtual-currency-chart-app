"use strict";
import React, {Component} from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import './css/App.css';
import MainChartComponent from "./components/mainChart/MainChart";
import HeaderComponent from "./components/common/Header";
import FooterComponent from "./components/common/Footer";
import SideMenuComponent from "./components/common/SideMenu";

export default class App extends Component {
    render() {
        return (
            <div className="App" >
                <Grid fluid={true} >
                    <HeaderComponent/>
                    <Row>
                        <Col sm={9} style={{border: 'solid 1px #c6d5dc'}}>
                            <MainChartComponent />
                        </Col>
                        <Col sm={3} style={{border: 'solid 1px #c6d5dc'}}>
                            <SideMenuComponent/>
                        </Col>
                    </Row>
                    <FooterComponent/>
                </Grid>
            </div>
        )
    }
}