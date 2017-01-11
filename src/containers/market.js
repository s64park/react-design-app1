/**
 * Created by Terry on 2017-01-10.
 */
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import { MarketNavbar, DownloadBox, SelectIssuerSearchBar, UploadBox, DataTable, Pages } from '../components/index';
import { getSecondaryLevels } from '../actions';
import { connect } from 'react-redux';

class Market extends Component {
    componentWillMount() {
        this.props.getSecondaryLevels();
    }

    render() {
        console.log(this.props.tableData);
        return (
            <div>
                <Row id="market-header">
                    <Col xs={12}>
                        <h5><strong>MARKET</strong></h5>
                    </Col>
                </Row>
                <MarketNavbar/>
                <Row className="text-center center-block" id="market-sup-header">
                    <Col xs={12} sm={3} className="text-justify no-padding" ><h5><strong>Secondary Levels</strong></h5></Col>
                    <Col xs={12} sm={6} className="padding"><SelectIssuerSearchBar/></Col>
                    <Col xs={12} sm={3} className="text-right no-padding"><UploadBox/><DownloadBox/></Col>
                </Row>
                <DataTable/>
                <Row>
                    <Col xs={12}>
                        <Pages/>
                    </Col>
                </Row>
            </div>
        );
    }
}



export default connect(null, {getSecondaryLevels})(Market);