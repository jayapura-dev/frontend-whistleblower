import React from 'react';
import  { Link } from 'react-router-dom';
import axios from 'axios';
import '../../partialstyle/registerstyle.css';

class Register extends React.Component {

    componentDidMount() {
        document.title = "DAFTAR AKUN";
    }

    SubmitRegister = async event => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        const FormRegister = new FormData()

        FormRegister.append('username', username);
        FormRegister.append('email', email);
        FormRegister.append('password', password);

        await axios.post('http://127.0.0.1:8000/api/auth/register', FormRegister)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });

    }
    
    render(){
        const articlestyle = {
            maxWidth: "400px"
        }
        return (
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
                                    <h4 className="card-title mt-3 text-center">FORM PENDAFTARAN AKUN</h4>
                                    <p className="text-center">Sebelum Anda Melakukan Pengaduan Harap Agar daftar terlebih Dahulu Daftar Akun Agar Anda Dapat Mengontrol Aduan Anda</p>
                                    
                                    <p className="divider-text">
                                        <span className="bg-light">FORM</span>
                                    </p>
                                    <div className="card bg-light" >
                                        <form onSubmit={this.SubmitRegister} className="card card-lg" style={{padding: "10px"}}>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                                </div>
                                                <input name="username" className="form-control" placeholder="Username" type="text" />
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                                </div>
                                                <input name="email" className="form-control" placeholder="Email address" type="email" />
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                                </div>
                                                <input name="password" className="form-control" placeholder="password" type="text" />
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                                </div>
                                                <input name="password2" className="form-control" placeholder="Repeat password" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary"> Buat Akun  </button>
                                            </div>
                                            <p className="divider-text">
                                                <span className="bg-light">SUDAH ADA AKUN ? <Link to="/Login"><button className="btn btn-success">Login</button></Link></span>
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
};

export default Register;