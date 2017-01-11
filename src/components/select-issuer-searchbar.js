import React from 'react';
import {Navbar, FormGroup, FormControl, Button, Row, Col} from 'react-bootstrap';

const SelectIssuerSearchBar = (props) => {
    return (
        <form>
            <Row>
                <Col xs={9} sm={10} id="select-issuer-search">
                    <FormGroup style={{width:'100%'}}>
                        <FormControl style={{width:'100%'}} type="text" placeholder="Select Issuer" />
                    </FormGroup>
                </Col>
                <Col xs={3} sm={2} className="no-padding">
                    <Button style={{width: '100%'}} type="submit">Filter</Button>
                </Col>
            </Row>
        </form>
    );
};

export default SelectIssuerSearchBar;