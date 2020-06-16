import React from 'react';
import backend from '../../apis/backend';
import '../../partialstyle/StyleSearchBar.css';

class CariAduan extends React.Component{
    state = { items: [], kode:'' };

    componentDidMount() {
        document.title = "Tracking Pengaduan"
    }

    onInputChange = event => {
        this.setState({ kode: event.target.value });
    }

    onButtonSubmit = async event => {
        event.preventDefault()

        const response = await backend.get('/aduan', {
            params: {
                kode_unik: this.state.kode
            }
        });

        this.setState({ items: response.data });
        console.log(response)
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
                                <form className="card card-sm" onSubmit={this.onButtonSubmit}>
                                    <div className="card-body row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <i className="fas fa-search h4 text-body"></i>
                                        </div>
                                        <div className="col">
                                            <input type="text" name="kode_unik" value={this.state.kode} onChange={this.onInputChange} className="form-control form-control-borderless" placeholder="Masukan Kode Unik Anda" />
                                        </div>
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-send"></i>SEND DATA</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.items.map(i => (i.title))}
            </div>
            
            
        );
    };
}

export default CariAduan