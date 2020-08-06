import React from 'react';

const SocialBox = () => {
    return (
        <div className="col-md-3">
            <div className="social-box facebook">
                <i className="fa fa-facebook"></i>
                <ul>
                    <li>
                        <strong>256k</strong>
                        <span>friends</span>
                    </li>
                    <li>
                        <strong>359</strong>
                        <span>feeds</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default SocialBox;