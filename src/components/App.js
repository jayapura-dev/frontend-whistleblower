import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import MasterLayout from './MasterLayout';
import Notif from './Notif';
import Home from './page/Home';
import PetunjukAduan from './page/PetunjukAduan';
import CariAduan from './page/CariAduan';
import TataCara from './page/TataCara';
import FormAduan from './page/FormAduan';
import Register from './auth/Register';
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
                    <BrowserRouter>
                        <MasterLayout />
                        <div className="main" id="main">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Private path="/FormAduan" component={FormAduan} />
                                <Route path="/PetunjukAduan" component={PetunjukAduan} />
                                <Route path="/CariAduan" component={CariAduan} />
                                <Route path="/Register" component={Register} />
                                <Route path="/Login" component={AuthLogin} />
                            </Switch>
                        </div>
                        <TataCara />
                    </BrowserRouter>
                </AlertProvider>
                
            </Provider>
        );
    }
}

export default App;