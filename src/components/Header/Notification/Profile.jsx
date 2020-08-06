import React from 'react';

const Profile = () => {
    return (
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                <span className="profile-ava">
                    <img alt="" src="assets/img/avatar1_small.jpg" />
                </span>
                <span className="username">Jenifer Smith</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <div className="log-arrow-up"></div>
                <li className="eborder-top">
                    <a href="/"><i className="icon_profile"></i> Mi perfil</a>
                </li>
                <li>
                    <a href="/"><i className="icon_mail_alt"></i> Mensajes</a>
                </li>
                <li>
                    <a href="/"><i className="icon_clock_alt"></i> Linea de tiempo</a>
                </li>
                <li>
                    <a href="/"><i className="icon_chat_alt"></i> Chats</a>
                </li>
                <li>
                    <a href="/"><i className="icon_key_alt"></i> Log Out</a>
                </li>
            </ul>
        </li>
    );
}
 
export default Profile;