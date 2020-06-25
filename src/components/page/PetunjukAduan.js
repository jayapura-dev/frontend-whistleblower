import React from 'react';
import { connect } from 'react-redux';
import { fetchPetunjuk } from '../../actions/petunjuk';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PentunjukAduan extends React.Component{

    static propTypes = {
        petunjuk: PropTypes.array.isRequired,
        fetchPetunjuk: PropTypes.func.isRequired,
    };

    componentDidMount() {
        document.title = "Petunjuk Pengaduan"
        this.props.fetchPetunjuk();
    }

    renderList(){
        return (
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
                                                {this.props.petunjuk.map((petunjuk) => (
                                                    <tr key={petunjuk.id_pen}>
                                                        <td>{petunjuk.no}</td>
                                                        <td>{petunjuk.label}</td>
                                                        <td>{petunjuk.keterangan}</td>
                                                        <td>{petunjuk.sample}</td>
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
        );
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
                                        <button className="btn btn-primary btn-action" data-wow-delay="0.2s">FORM ADUAN</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
  petunjuk: state.petunjuk.petunjuk,
});

export default connect(mapStateToProps, { fetchPetunjuk })(PentunjukAduan);