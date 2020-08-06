import React from 'react';
import Header from './Main/Header';
import Box from './Main/Box';
import Panel from './Main/Panel';
import Social from './Main/Social';

const Main = () => {
    return (
        <section id="main-content">
            <section className="wrapper">
                <Header />

                <div className="row">
                    <Box />

                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info-box brown-bg">
                            <i className="fa fa-shopping-cart"></i>
                            <div className="count">7.538</div>
                            <div className="title">Purchased</div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info-box dark-bg">
                            <i className="fa fa-thumbs-o-up"></i>
                            <div className="count">4.362</div>
                            <div className="title">Order</div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info-box green-bg">
                            <i className="fa fa-cubes"></i>
                            <div className="count">1.426</div>
                            <div className="title">Stock</div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <Panel />
                    <Social />

                </div>

            </section>
        </section>
    );
}
 
export default Main;