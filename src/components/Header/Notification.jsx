import React from 'react';
import Task from './Notification/Task';
import Mail from './Notification/Mail';
import Alert from './Notification/Alert';
import Profile from './Notification/Profile';

const notification = () => {
    return (
        <div className="top-nav notification-row">
            <ul className="nav pull-right top-menu">
                <Task />
                <Mail />
                <Alert />
                <Profile />
            </ul>
        </div>
    );
}
 
export default notification;