import React from 'react';

const Header = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <h3 className="page-header"><i className="fa fa-laptop"></i> Dashboard</h3>
                <ol className="breadcrumb">
                    <li><i className="fa fa-home"></i><a href="/">Home</a></li>
                    <li><i className="fa fa-laptop"></i>Dashboard</li>
                </ol>
            </div>
        </div>
    );
}
 
export default Header;