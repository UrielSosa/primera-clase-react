import React from 'react';

const Mail = () => {
    return (
        <li id="mail_notificatoin_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                <i className="icon-envelope-l"></i>
                <span className="badge bg-important">5</span>
            </a>
            <ul className="dropdown-menu extended inbox">
                <div className="notify-arrow notify-arrow-blue"></div>
                <li>
                    <p className="blue">You have 5 new messages</p>
                </li>
                <li>
                    <a href="/">
                        <span className="photo"><img alt="avatar" src="assets/img/avatar-mini.jpg" /></span>
                        <span className="from">Greg  Martin</span>
                        <span className="subject">
                            <span className="time">1 min</span>
                        </span>
                        <span className="message">
                            I really like this admin panel.
                                    </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="photo"><img alt="avatar" src="assets/img/avatar-mini2.jpg" /></span>
                        <span className="subject">
                            <span className="from">Bob   Mckenzie</span>
                            <span className="time">5 mins</span>
                        </span>
                        <span className="message">
                            Hi, What is next project plan?
                  </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="photo"><img alt="avatar" src="assets/img/avatar-mini3.jpg" /></span>
                        <span className="subject">
                            <span className="from">Phillip   Park</span>
                            <span className="time">2 hrs</span>
                        </span>
                        <span className="message">
                            I am like to buy this Admin Template.
                  </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="subject">
                            <span className="photo"><img alt="avatar" src="assets/img/avatar-mini4.jpg" /></span>
                            <span className="from">Ray   Munoz</span>
                            <span className="time">1 day</span>
                        </span>
                        <span className="message">
                            Icon fonts are great.
                  </span>
                    </a>
                </li>
                <li>
                    <a href="/">See all messages</a>
                </li>
            </ul>
        </li>
    );
}
 
export default Mail;