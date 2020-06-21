import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UserLogout } from '../actions/auth';

class Header extends React.Component{

    static propTypes = {
        auth: PropTypes.object.isRequired,
        UserLogout: PropTypes.func.isRequired,
    };

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const AuthHeader = (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-link page-scroll">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="nav-link page-scroll">
                        <Link to="/" >Aduan</Link>
                    </li>
                     <div className="dropdown">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            <strong>{user ? `${user.username}` : ''}</strong>
                        </button>
                        <div className="dropdown-menu">
                            <li onClick={this.props.UserLogout} className="dropdown-item" href="#">Logout</li>
                        </div>
                    </div> 
                </ul>
            </div>
        );

        const PublicHeader = (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-link page-scroll">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="nav-link page-scroll">
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </div>
        );
        return(
            <div className="wrapper animsition" data-animsition-in-class="fade-in" data-animsition-in-duration="1000" data-animsition-out-class="fade-out" data-animsition-out-duration="1000">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top" role="navigation">
                        <div className="container">
                            <a className="navbar-brand page-scroll" href="t"><img src="assets/logos/epengaduan.png" width="20%" alt="jayapuradev Logo" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {isAuthenticated ? AuthHeader : PublicHeader}
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { UserLogout })(Header);