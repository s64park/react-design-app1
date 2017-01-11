import React, { Component } from 'react';
import { Pagination, Button } from 'react-bootstrap';

const nextButton = (<span>next <i className="fa fa-angle-right" aria-hidden="true"></i></span>);
const lastButton = (<span>last <i className="fa fa-angle-double-right" aria-hidden="true"></i></span>);
const firstButton = (<span><i className="fa fa-angle-double-left" aria-hidden="true"></i> first</span>);
const prevButton = (<span><i className="fa fa-angle-left" aria-hidden="true"></i> prev</span>);

class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
    }

    render() {
        return (
            <div className="center-block text-center">
                <Pagination
                            prev={prevButton}
                            next={nextButton}
                            first={firstButton}
                            last={lastButton}
                            ellipsis
                            boundaryLinks
                            items={20}
                            maxButtons={5}
                            activePage={this.state.activePage}
                            onSelect={this.handleSelect}
                />
            </div>
        );
    }
}

export default Pages;