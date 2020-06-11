import React from 'react';

class TataCara extends React.Component {
    render() {
        return (
            <div className="services-section text-center" id="services">
                <div className="container">
                    <div className="row  justify-content-md-center">
                        <div className="col-md-8">
                            <div className="services-content">
                                <h1 className="wow fadeInUp" data-wow-delay="0s">Bagaimana Proses Yang akan dilakukan ?</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    Ada Beberapa Step Yang perlu Anda ketahui ketika Anda Mengirimkan Pengaduan Kepada kami.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="services">
                                <div className="row">
                                    <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="services-icon">
                                            <img src="assets\logos\icon1.png" height="60" width="60" alt="Service" />
                                        </div>
                                        <div className="services-description">
                                            <h1>Tulis Aduan</h1>
                                            <p>
                                                Anda Mengririmkan Aduan Kepada Kami, dan Admin Kami akan Melakukan Pemeriksaan Terhadap Data Aduan Anda dan dilanjutkan Ke Bag. Pemeriksaan.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="services-icon">
                                            <img className="icon-2" src="assets\logos\icon2.png" height="60" width="60" alt="Service" />
                                        </div>
                                        <div className="services-description">
                                            <h1>Proses Delegasi</h1>
                                            <p>
                                                Jika Data dan Dokumen Lapiran Anda Valid Pemeriksa akan Melakukan Proses Delegasi Kepada Pihak - Pihak yang berwenang Agar ditindak Lanjuti.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="services-icon">
                                            <img className="icon-3" src="assets\logos\icon3.png" height="60" width="60" alt="Service" />
                                        </div>
                                        <div className="services-description">
                                            <h1>Konfirmasi & Pemeriksaan</h1>
                                            <p>
                                                Kami akan Mengkonfirmasi Aduan anda Kembali & Selanjutnya akan Melakukan Proses Pemeriksaan Terhadap Instansi yang telah anda Laporkan. 
                                            </p>
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

export default TataCara;