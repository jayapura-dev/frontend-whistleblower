import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'; 

class AuthLogin extends React.Component {
    state = { username: '', password: '' };
         
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
            return <Redirect to="/FormAduan" />;
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
                                    <div className="card bg-light" >
                                        <form onSubmit={this.SubmitLogin} className="card card-lg" style={{padding: "10px"}}>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                                </div>
                                                <input name="username" className="form-control" onChange={this.onChange} value={username} placeholder="Username" type="text" />
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                                </div>
                                                <input name="password" className="form-control" onChange={this.onChange} value={password} placeholder="password" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary"> LOGIN </button>
                                            </div>
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

export default connect(mapStateToProps, { login })(AuthLogin);