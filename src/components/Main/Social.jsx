import React from 'react';
import SocialBox from './Social/SocialBox';
const Social = () => {
    return (
        
        <div className="column">
            <SocialBox />
            <div className="col-md-3">

                <div className="social-box google-plus">
                    <i className="fa fa-google-plus"></i>
                    <ul>
                        <li>
                            <strong>962</strong>
                            <span>followers</span>
                        </li>
                        <li>
                            <strong>256</strong>
                            <span>circles</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="col-md-3">

                <div className="social-box twitter">
                    <i className="fa fa-twitter"></i>
                    <ul>
                        <li>
                            <strong>1562k</strong>
                            <span>followers</span>
                        </li>
                        <li>
                            <strong>2562</strong>
                            <span>tweets</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
 
export default Social;