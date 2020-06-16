import React from 'react';
import '../../partialstyle/StyleSearchBar.css';

class CariAduan extends React.Component{
    render(){
        return (
            <div>
                <div className="hero-section app-hero">
                    <div className="container">
                        <div className="hero-content app-hero-content text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        TRACKING PENGADUAN
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-features" id="features">
                    <div className="container">
                        <br />
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8">
                                <form className="card card-sm">
                                    <div className="card-body row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <i className="fas fa-search h4 text-body"></i>
                                        </div>
                                        <div className="col">
                                            <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Masukan Kode Unik Anda" />
                                        </div>
                                        
                                        <div class="col-auto">
                                            <button class="btn btn-lg btn-success" type="submit">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        );
    };
}

export default CariAduan