import React from 'react';
import '../../partialstyle/radiobutton.css';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import backend from '../../apis/backend'
import PropTypes from 'prop-types';
import { CreateAduan } from '../../actions/pengaduan';

class Create extends React.Component {
    state = ({ 
        datadistrik: [], 
        datakategori: [], 
        datakampung: [], 
        id_distrik: '',
        FileUpload: null,
        num: ''
    });

    static propTypes = {
        CreateAduan: PropTypes.func.isRequired,
    };

    async componentDidMount() {
        document.title = "Form Pengaduan"

        const resdistrik = await backend.get('/distrik');
        const reskategori = await backend.get('/kategori');

        this.setState({ 
            datadistrik: resdistrik.data, 
            datakategori: reskategori.data
        });
    }

    changeDistrik = async event => {
        this.setState({ id_distrik: event.target.value });
        const reskampung = await backend.get('/distrik/'+ event.target.value);

        this.setState({ 
            datakampung: reskampung.data.kampungs 
        });
    }

    fileSelected = event => {
        this.setState({ 
            FileUpload: event.target.files[0] 
        });
    }

    onNumber = event => {
      const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({num: event.target.value})
      }
   }

   onButtonSubmit = async event => {
        event.preventDefault();

        const title = event.target.elements.title.value;
        const nama_pengadu = event.target.elements.nama_pengadu.value;
        const email = event.target.elements.email.value;
        const no_telfon = event.target.elements.no_telfon.value;
        const kategori = event.target.elements.kategori.value;
        const distrik = event.target.elements.distrik.value;
        const kampung = event.target.elements.kampung.value;
        const deskripsi_aduan = event.target.elements.deskripsi_aduan.value;
        const anonim = event.target.elements.anonim.value;

        const FormPost = new FormData()

        FormPost.append('title', title);
        FormPost.append('nama_pengadu', nama_pengadu);
        FormPost.append('email', email);
        FormPost.append('no_telfon', no_telfon);
        FormPost.append('kategori', kategori);
        FormPost.append('distrik', distrik);
        FormPost.append('kampung', kampung);
        FormPost.append('deskripsi_aduan', deskripsi_aduan);
        FormPost.append('anonim', anonim);
        FormPost.append('file', this.state.FileUpload);

        this.props.CreateAduan(FormPost)
        return <Redirect to='/Pengaduan' />
    }

    render(){
        return (
            <div>
                <div className="hero-section app-hero">
                    <div className="container">
                        <div className="hero-content app-hero-content text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        FORM PENGADUAN
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-features" id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 mt-12">
                                <div className="ui container">
                                    <div class="ui padded segment" style={{ padding: '15px' }}>
                                            <h1>
                                                Perhatian !! <br/>Mohon Isilah Form Pengaduan dengan Data yang benar, dan tidak Ambigu, Jika Belum Mengerti dengan Isian Form Silahkan Pergi ke <Link to="/PetunjukAduan">Tata Cara Pengisian Form Aduan.</Link>
                                                <br />
                                            </h1>
                                        </div>
                                    <br />
                                    <form onSubmit={this.onButtonSubmit} className="ui form" style={{ padding: "15px" }}>
                                        <div className="card">
                                            <div className="card-header">
                                                <h2>FORM PENGADUAN</h2>
                                            </div>
                                            <div className="card-block">
                                                <div className="form-group">
                                                    <label className="text-center"><strong><h2>DATA DIRI</h2></strong></label>
                                                </div>
                                                <hr />
                                                
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <input type="text" className="form-control" name="nama_pengadu" placeholder="Nama Lengkap Anda" required={true} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <input type="email" className="form-control" name="email" placeholder="Email Anda" required={true} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <input type="text" className="form-control" value={this.state.num} onChange={this.onNumber} required={true} name="no_telfon" placeholder="No Kontak Anda" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-center"><h4>PENGADUAN & LOKASI TEMPAT KEJADIAN</h4></label>
                                                </div>
                                                <hr />
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <input type="text" className="form-control" name="title" required={true} placeholder="Judul Aduan Anda" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <select type="text" className="form-control" name="kategori" required={true}>
                                                            <option value="0">--- Pilih Kategori ---</option>
                                                            {this.state.datakategori.map(k => (
                                                                <option key={k.id_kategori} value={k.id_kategori}>{k.nama_kategori} </option>
                                                            ))}
                                                            
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <select type="text" className="form-control" name="distrik" required={true} onChange={this.changeDistrik} value={this.state.id_distrik}>
                                                            <option value="0">--- Pilih Distrik ---</option>
                                                            {this.state.datadistrik.map(i => (
                                                                <option key={i.id_distrik} value={i.id_distrik}>{i.nama_distrik} </option>
                                                            ))}
                                                            
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <select type="text" className="form-control" name="kampung" required={true}>
                                                            <option value="0">--- Pilih Kampung ---</option>
                                                            {this.state.datakampung.map(k => ( 
                                                                <option key={k.id_kampung} value={k.id_kampung}>{k.nama_kampung}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <textarea className="form-control" name="deskripsi_aduan" defaultValue="Isi Aduan Anda . . ." />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-center"><h4>Attach File (Tambahkan File Referensi Agar Memperkuat Pengaduan Anda!)</h4></label>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-6">
                                                        <input type="file" className="form-control" onChange={this.fileSelected} name="file" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="labeltext">Anda Mengadu Sebagai Anonim ? (Kami Tidak Akan Menampilkan Nama anda Pada Laporan Kami) </label><br />
                                                    <div className="col-xs-6">
                                                         <div className="form-check-inline">
                                                            <label className="customradio"><span className="radiotextsty">Ya</span>
                                                                <input type="radio" defaultChecked="True" value="tampil" name="anonim" /><span className="checkmark"></span>
                                                            </label>
                                                           <div className="space-div"></div>
                                                            <label className="customradio"><span className="radiotextsty">Tidak</span>
                                                                <input type="radio" name="anonim" value="tidak" /><span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alert alert-warning">
                                                    <h2>Mohon Periksa Kembali Aduan Anda Dengan Benar! Karena Setelah Anda Mengirim, Aduan Tidak Dapat di Edit (Ubah)</h2>
                                                </div>
                                                <button type="submit" className="ui green button"><i className="fa fa-send"></i> KIRIM PENGADUAN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { CreateAduan })(Create);