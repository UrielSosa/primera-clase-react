import React from 'react';

const Search = () => {
    return (
        <div className="nav search-row" id="top_menu">
            <ul className="nav top-menu">
                <li>
                    <form className="navbar-form">
                        <input className="form-control" placeholder="Search" type="text" />
                    </form>
                </li>
            </ul>
        </div>
    );
}
 
export default Search;