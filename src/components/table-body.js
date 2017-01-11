import React from 'react';

const TableBody = (props) => {
    if (!props.data.secondaryLevels) {
        return (<tbody></tbody>);
    } else {
        return (
            <tbody>
            {props.data.secondaryLevels.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.securityName}</td>
                        <td>{item.description}</td>
                        <td>{item.currency}</td>
                        <td className="text-center">{item.yearsRemaining}</td>
                        <td>{item.benchmarkSecurityDescription}</td>
                        <td className="text-center">{item.bidSpreadVsBenchmark}</td>
                        <td className="text-center">{item.bidSpreadVsGocCurve}</td>
                        <td className="text-center">{item.bidSpreadVs3mCdor}</td>
                        <td className="text-center">{item.bidSpreadVs3mUsdl}</td>
                        <td>{item.readableTimestamp}</td>
                        <td><i className="fa fa-signal" aria-hidden="true"></i></td>
                    </tr>
                );
            })}
            </tbody>
        );
    }
};

export default TableBody;