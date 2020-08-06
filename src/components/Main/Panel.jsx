import React from 'react';
import TableRow from './Panel/TableRow';

const Panel = () => {
    return (
        <div className="col-lg-9 col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2><i className="fa fa-flag-o red"></i><strong>Registered Users</strong></h2>
                </div>
                <div className="panel-body">
                    <table className="table bootstrap-datatable countries">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Country</th>
                                <th>Users</th>
                                <th>Online</th>
                                <th>Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow />
                            <tr>
                                <td><img src="assets/img/India.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag" /></td>
                                <td>India</td>
                                <td>3652</td>
                                <td>2563</td>
                                <td>
                                    <div className="progress thin">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{ width: "57%" }}>
                                        </div>
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={{ width: "43%" }}>
                                        </div>
                                    </div>
                                    <span className="sr-only">57%</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="assets/img/Spain.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag" /></td>
                                <td>Spain</td>
                                <td>562</td>
                                <td>452</td>
                                <td>
                                    <div className="progress thin">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100" style={{ width: "93%" }}>
                                        </div>
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100" style={{ width: "7%" }}>
                                        </div>
                                    </div>
                                    <span className="sr-only">93%</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="assets/img/India.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag" /></td>
                                <td>Russia</td>
                                <td>1258</td>
                                <td>958</td>
                                <td>
                                    <div className="progress thin">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                        </div>
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        </div>
                                    </div>
                                    <span className="sr-only">20%</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="assets/img/Spain.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag" /></td>
                                <td>USA</td>
                                <td>4856</td>
                                <td>3621</td>
                                <td>
                                    <div className="progress thin">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                        </div>
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        </div>
                                    </div>
                                    <span className="sr-only">20%</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="assets/img/Germany.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag" /></td>
                                <td>Brazil</td>
                                <td>265</td>
                                <td>102</td>
                                <td>
                                    <div className="progress thin">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                        </div>
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        </div>
                                    </div>
                                    <span className="sr-only">20%</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="assets/img/Germany.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag germany" /></td>
                                <td>Coloumbia</td>
                                <td>265</td>
                                <td>102</td>
                                <td>
                                    <div className="progress thin">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                        </div>
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        </div>
                                    </div>
                                    <span className="sr-only">20%</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="assets/img/Germany.png" style={{ height: "18px", marginTop: "-2px" }} alt="flag germany" /></td>
                                <td>France</td>
                                <td>265</td>
                                <td>102</td>
                                <td>
                                    <div className="progress thin">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20 %" }}>
                                        </div>
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        </div>
                                    </div>
                                    <span className="sr-only">20%</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}
 
export default Panel;