import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRouter = ({ component: Component, auth, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => {
                if(auth.isLoading){
                    return <h4>Authenticating . . .</h4>;
                } else if (!auth.isAuthenticated){
                    return <Redirect to="/" />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRouter);