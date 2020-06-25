import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth'; 
import { createMessage } from '../../actions/messages';

class AuthRegister extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
     };

    SubmitRegister = event => {
        event.preventDefault();

        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match' })
        } else {
            const newUser = {
                username,
                email,
                password,
            };
            this.props.register(newUser);
        }
    }

    onChange = event => this.setState({
        [event.target.name]: event.target.value 
    });

    render() {
        const articlestyle = {
            maxWidth: "400px"
        }

        if (this.props.isAuthenticated) {
            return <Redirect to="/FormAduan" />;
        }

        const { username, email, password, password2 } = this.state;
        return(
            <div>
                <div className="hero-section app-hero">
                    <div className="container">
                        <div className="hero-content app-hero-content text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        DAFTAR AKUN
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
                                    <h4 className="card-title mt-3 text-center">REGISTRASI AKUN</h4>
                                    <br />
                                    <div className="card" >
                                        <form onSubmit={this.SubmitRegister} className="ui large form" style={{padding: "10px"}}>
                                            <div className="ui stacked segment">
                                                <div className="field">
                                                    <div className="ui left icon input">
                                                        <i className="user icon"></i>
                                                        <input type="text" name="username" onChange={this.onChange} value={username} placeholder="Username" />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui left icon input">
                                                        <i className="envelope outline icon"></i>
                                                        <input type="text" name="email" onChange={this.onChange} value={email} placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui left icon input">
                                                        <i className="lock icon"></i>
                                                        <input type="text" name="password" onChange={this.onChange} value={password} placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui left icon input">
                                                        <i className="lock icon"></i>
                                                        <input type="text" name="password2" onChange={this.onChange} value={password2} placeholder="Password" />
                                                    </div>
                                                </div>
                                                <input className="ui fluid large teal submit button" value="DAFTAR" type="submit" />
                                            </div>
                                            <p className="divider-text">
                                                <span className="bg-light">Sudah Punya Akun ? <Link to="/Login">Login</Link></span>
                                            </p>
                                        </form>
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

export default connect(mapStateToProps, { register })(AuthRegister);