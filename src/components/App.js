import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MasterLayout from './MasterLayout';
import Home from './page/Home';
import PetunjukAduan from './page/PetunjukAduan';
import CariAduan from './page/CariAduan';
import TataCara from './page/TataCara';
import FormAduan from './page/FormAduan';

class App extends React.Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <MasterLayout />
                    <div className="main" id="main">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/FormAduan" component={FormAduan} />
                            <Route path="/PetunjukAduan" component={PetunjukAduan} />
                            <Route path="/CariAduan" component={CariAduan} />
                        </Switch>
                    </div>
                    <TataCara />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;