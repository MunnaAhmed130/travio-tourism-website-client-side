import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = UseAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="primary" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? children : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;