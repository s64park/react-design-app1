import React from 'react';

const BidSpreadHead = (props) => {
    return (
        <thead>
        <tr id="bid-spread">
            <th colSpan="5"></th>
            <th colSpan="4" className="text-center" id="spread-vs">Spread vs.</th>
            <th colSpan="2"></th>
        </tr>
        </thead>
    );
};

export default BidSpreadHead;