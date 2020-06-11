import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="hero-section app-hero">
                    <div className="container">
                        <div className="hero-content app-hero-content text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <h1 className="wow fadeInUp" data-wow-delay="0s">e - Aduan Pemerintah Kabupaten Jayapura</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Masyarakat dapat melakukan pengaduan atas dugaan adanya gratifikasi, korupsi, manipulasi dan sejenisnya yang berpotensi merugikan negara dan
                                        ambil peran dalam mewujudkan pelayanan masyarakat yang lebih baik.
                                    </p>
                                    
                                    <button className="btn btn-primary btn-action" data-wow-delay="0.2s" href="#">FORM PENGADUAN</button>
                                </div>
                                <div className="col-md-12">
                                    <div className="hero-image">
                                        <img className="img-fluid" src="assets\images\app_hero_1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default Home;