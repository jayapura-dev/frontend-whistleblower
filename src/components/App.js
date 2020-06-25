import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import MasterLayout from './MasterLayout';
import Footer from './Footer';
import Alerts from './Alerts';
import Home from './page/Home';
import PetunjukAduan from './page/PetunjukAduan';
import ReadPengaduan from './pengaduan/r-pengaduan';
import TataCara from './page/TataCara';
import FormAduan from './pengaduan/Create';
import Register from './auth/AuthRegister';
import AuthLogin from './auth/AuthLogin';
import Private from './private/PrivateRoute';
import store from '../store';
import { UserRead } from '../actions/auth';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends React.Component {
    
    componentDidMount() {
        store.dispatch(UserRead());
    }
    
    render() {
        return(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions} >
                    <Fragment>
                        <Router>
                            <Alerts />
                            <MasterLayout />
                            <div className="main" id="main">
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Private path="/FormAduan" component={FormAduan} />
                                    <Route path="/PetunjukAduan" component={PetunjukAduan} />
                                    <Private path="/Pengaduan" component={ReadPengaduan} />
                                    <Route path="/Register" component={Register} />
                                    <Route path="/Login" component={AuthLogin} />
                                </Switch>
                            </div>
                            <TataCara />
                            <Footer />
                        </Router>
                    </Fragment>                    
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;