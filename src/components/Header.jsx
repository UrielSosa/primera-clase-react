import React from 'react';
import Search from './Header/Search';
import Notification from './Header/Notification';

const Header = () => {
    return (
        <header className="header dark-bg">
            <div className="toggle-nav">
                <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i className="icon_menu"></i></div>
            </div>

            <a href="/" className="logo">Admin<span className="lite">istrador</span></a>

            <Search/>
            <Notification />
            
        </header>
    );
}
 
export default Header;