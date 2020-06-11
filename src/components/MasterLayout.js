import React from 'react';

const Header = () => {
    return(
        <div className="wrapper animsition" data-animsition-in-class="fade-in" data-animsition-in-duration="1000" data-animsition-out-class="fade-out" data-animsition-out-duration="1000">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <a className="navbar-brand page-scroll" href="t"><img src="assets/logos/epengaduan.png" width="20%" alt="jayapuradev Logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#main">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#services">Aduan</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#features">Login</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;