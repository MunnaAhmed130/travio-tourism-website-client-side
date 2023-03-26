import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user } = UseAuth();
    // if (isLoading) {
    //     return <Spinner animation="border" variant="primary" />;
    // }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
