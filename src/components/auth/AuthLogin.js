import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'; 

class AuthLogin extends React.Component {

    state = { username: '', password: '' };

    componentDidMount() {
        document.title = 'Login | e - Pengaduan'
    }
    
         
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    SubmitLogin = event => {
        event.preventDefault();

        this.props.login(
            this.state.username,
            this.state.password
        );

    }

    onChange = event => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to='/pengaduan' />;
        }
        const articlestyle = {
            maxWidth: "400px"
        }
        const { username, password } = this.state;
        return (
            <div>
                <div className="hero-section app-hero">
                    <div className="container">
                        <div className="hero-content app-hero-content text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        LOGIN AKUN
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="flex-features" id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8">
                                <article className="card-body mx-auto" style={articlestyle}>
                                    <h4 className="card-title mt-3 text-center">FOM LOGIN</h4>
                                    <p className="text-center">Anda Harus Login Terlebih Dahulu Untuk Menulis Pengaduan</p>
                                    <br />
                                    <div className="" >
                                        <form className="ui large form" onSubmit={this.SubmitLogin}>
                                            <div className="ui stacked segment">
                                                <div className="field">
                                                    <div className="ui left icon input">
                                                        <i className="user icon"></i>
                                                        <input type="text" name="username" onChange={this.onChange} value={username} placeholder="Username" />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui left icon input">
                                                        <i className="lock icon"></i>
                                                        <input type="text" name="password" onChange={this.onChange} value={password} placeholder="Password" />
                                                    </div>
                                                </div>
                                                <input className="ui fluid large teal submit button" value="Login" type="submit" />
                                            </div>
                                            <div className="ui error message"></div>
                                        </form>
                                        <div className="ui message">
                                            Belum Punya Akun? <Link to="/Register"> Daftar</Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(AuthLogin);