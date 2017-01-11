import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import TableHead from './table-head';
import TableBody from './table-body';
import BidSpreadHead from './bid-spread-head';

const DataTable = (props) => {
    return (
            <Table responsive id="table">
                <BidSpreadHead/>
                <TableHead/>
                <TableBody data={props.tableData} />
            </Table>
    );
};

function mapStateToProps(state) {
    return {
        tableData: state.tableData
    };
}

export default connect(mapStateToProps)(DataTable);