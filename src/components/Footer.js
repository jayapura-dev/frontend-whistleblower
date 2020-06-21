import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <img src="/assets/images/KabJayapura.png" width="30px" alt="kabjayapura" />
                        
                        <div className="footer-text">
                            <p>
                                Copyright © 2020 INSPEKTORAT KAB. JAYAPURA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a id="back-top" className="back-to-top page-scroll" href="#main">
                <i className="ion-ios-arrow-thin-up"></i>
            </a>
        </div>
        
    );
}

export default Footer;