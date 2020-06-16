import React from 'react';
import { Link } from 'react-router-dom';
import backend from '../../apis/backend';

class PentunjukAduan extends React.Component{
    state = ({ petunjuk: [] });

    async componentDidMount() {
        document.title = "Petunjuk Penginputan Pengaduan"
        const response = await backend.get('/petunjuk/');

        console.log(response);
        this.setState({ 
            petunjuk: response.data
        });
    }
    
    render() {
        return (
            <div>
                <div className="hero-section app-hero">
                    <div className="container">
                        <div className="hero-content app-hero-content text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        PETUNJUK PENULISAN PENGADUAN
                                    </p>
                                    <Link to="/FormAduan">
                                        <button className="btn btn-primary btn-action" data-wow-delay="0.2s"><Link to="/FormAduan"></Link>FORM ADUAN</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-features" id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 mt-12">
                                <div className="container-fluid">
                                    <div className="card">
                                        <div className="card-header">
                                            <h2>KETERANGAN DAN CONTOH PENULISAN YANG BENAR :</h2>
                                        </div>
                                        <div className="card-block">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Label</th>
                                                        <th>Keterangan</th>
                                                        <th>Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.petunjuk.map(p => (
                                                    <tr key={p.id_pen}>
                                                        <td>{p.no}</td>
                                                        <td>{p.label}</td>
                                                        <td>{p.keterangan}</td>
                                                        <td>{p.sample}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default PentunjukAduan;