import React from 'react';

const Alert = () => {
    return (
        <li id="alert_notificatoin_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                <i className="icon-bell-l"></i>
                <span className="badge bg-important">7</span>
            </a>
            <ul className="dropdown-menu extended notification">
                <div className="notify-arrow notify-arrow-blue"></div>
                <li>
                    <p className="blue">You have 4 new notifications</p>
                </li>
                <li>
                    <a href="/">
                        <span className="label label-primary"><i className="icon_profile"></i></span>
                    Friend Request
                  <span className="small italic pull-right">5 mins</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="label label-warning"><i className="icon_pin"></i></span>
                    John location.
                  <span className="small italic pull-right">50 mins</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="label label-danger"><i className="icon_book_alt"></i></span>
                    Project 3 Completed.
                  <span className="small italic pull-right">1 hr</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="label label-success"><i className="icon_like"></i></span>
                    Mick appreciated your work.
                  <span className="small italic pull-right"> Today</span>
                    </a>
                </li>
                <li>
                    <a href="/">See all notifications</a>
                </li>
            </ul>
        </li>
    );
}
 
export default Alert;