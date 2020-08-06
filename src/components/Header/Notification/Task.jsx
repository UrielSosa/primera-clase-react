import React from 'react';
import Info from './Task/Info';
import Header from './Header';
import Footer from './Footer';

const Task = () => {
    return (
        <li id="task_notificatoin_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                <i className="icon-task-l"></i>
                <span className="badge bg-important">6</span>
            </a>
            <ul className="dropdown-menu extended tasks-bar">
                <Header />
                <Info />
                
                <li>
                    <a href="/">
                        <div className="task-info">
                            <div className="desc">
                                Project 1
                                        </div>
                            <div className="percent">30%</div>
                        </div>
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}>
                                <span className="sr-only">30% Complete (warning)</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <div className="task-info">
                            <div className="desc">Digital Marketing</div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                <span className="sr-only">80% Complete</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <div className="task-info">
                            <div className="desc">Logo Designing</div>
                            <div className="percent">78%</div>
                        </div>
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{ width: "78%" }}>
                                <span className="sr-only">78% Complete (danger)</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <div className="task-info">
                            <div className="desc">Mobile App</div>
                            <div className="percent">50%</div>
                        </div>
                        <div className="progress progress-striped active">
                            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                <span className="sr-only">50% Complete</span>
                            </div>
                        </div>

                    </a>
                </li>
                <Footer />
            </ul>
        </li>
    );
}
 
export default Task;