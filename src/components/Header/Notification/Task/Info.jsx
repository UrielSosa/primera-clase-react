import React from 'react';

const Info = () => {
    return (
        <li>
            <a href="/">
                <div className="task-info">
                    <div className="desc">Design PSD </div>
                    <div className="percent">90%</div>
                </div>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                        <span className="sr-only">90% Complete (success)</span>
                    </div>
                </div>
            </a>
        </li>
    );
}
 
export default Info;