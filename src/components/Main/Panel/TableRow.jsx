import React from 'react';

const TableRow = () => {
    return (
        <tr>
            <td><img src="assets/img/Germany.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag" /></td>
            <td>Germany</td>
            <td>2563</td>
            <td>1025</td>
            <td>
                <div className="progress thin">
                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{ width: "73%" }}>
                    </div>
                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100" style={{ width: "27%" }}>
                    </div>
                </div>
                <span className="sr-only">73%</span>
            </td>
        </tr>
    );
}
 
export default TableRow;