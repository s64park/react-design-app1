import React from 'react';

const TableHead = (props) => {
    return (
        <thead>
            <tr>
                <th>issuer <i className="fa fa-angle-down fa-lg" aria-hidden="true"></i></th>
                <th>Issue Description</th>
                <th>Currency</th>
                <th className="text-center">Years Remaining</th>
                <th>Benchmark</th>
                <th className="text-center">Benchmark</th>
                <th className="text-center">GoC Curve</th>
                <th className="text-center">3M CDOR</th>
                <th className="text-center">3M USDL</th>
                <th>Updated</th>
                <th></th>
            </tr>
        </thead>
    );
};

export default TableHead;