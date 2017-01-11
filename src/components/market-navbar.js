import React, {Component} from 'react';
import {Nav, NavItem, Row, Col } from 'react-bootstrap';

const MarketNavbar = (props) => {
    const handleSelect = (selectedKey) => {
        alert(`Selected ${selectedKey}`);
    };

    return (
        <Row id="market-navbar">
            <Nav bsStyle="tabs" activeKey={'Secondary Levels'} onSelect={handleSelect}>
                <NavItem eventKey={'Secondary Levels'}>Secondary Levels</NavItem>
                <NavItem eventKey={'new Issue Pricing Benchmarks - CAD'}>new Issue Pricing Benchmarks - CAD</NavItem>
                <NavItem eventKey={'New Issue Pricing Benchmarks - USD'}>New Issue Pricing Benchmarks - USD</NavItem>
                <NavItem eventKey={'Swap Rates - CAD'}>Swap Rates - CAD</NavItem>
                <NavItem eventKey={'Swap Rates - USD'}>Swap Rates - USD</NavItem>
            </Nav>
        </Row>
    )
};

export default MarketNavbar;