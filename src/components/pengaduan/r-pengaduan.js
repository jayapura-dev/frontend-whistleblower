import React from 'react';
import { connect } from 'react-redux';
import { fetchPengaduan } from '../../actions/pengaduan';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ReadPengaduan extends React.Component {

    static propTypes = {
        pengaduan: PropTypes.array.isRequired,
        fetchPengaduan: PropTypes.func.isRequired,
    };

    componentDidMount() {
        document.title = "Data Pengaduan Anda"
        this.props.fetchPengaduan();
    }
    
    render() {
        return(
            <div>
                <div className="hero-section app-hero">
                    <div className="container">
                        <div className="hero-content app-hero-content text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        DATA PENGADUAN
                                    </p>
                                    <Link to="/FormAduan">
                                        <button className="ui green button"><i className="file alternate icon"></i> FORM PENGADUAN</button>
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
                                            <h2>TABLE PENGADUAN ANDA</h2>
                                        </div>
                                        <div className="card-block">
                                            <table className="table ui fixed single line celled table">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>    
                                                        <th>Title</th>
                                                        <th>Deskripsi</th>
                                                        <th>Tanggal</th>
                                                        <th>Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.props.pengaduan.map(p => (
                                                    <tr className="item" key={p.id_aduan}>
                                                        <td>{p.id_aduan}</td>
                                                        <td>{p.title}</td>
                                                        <td>{p.deskripsi_aduan}</td>
                                                        <td>{p.date}</td>
                                                        <td></td>
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
    }
}

const mapStateToProps = (state) => ({
  pengaduan: state.pengaduan.pengaduan,
});

export default connect(mapStateToProps, { fetchPengaduan })(ReadPengaduan);