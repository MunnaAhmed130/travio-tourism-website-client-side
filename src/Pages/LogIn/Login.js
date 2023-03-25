import React from "react";
import UseAuth from "../../Hooks/UseAuth";
// import { useLocation, useHistory } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const { handleGoogleLogIn, user, handleLogOut } = UseAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || "/";
    const handleLogIn = () => {
        handleGoogleLogIn().then((result) => {
            // history.push(redirect_uri);
        });
    };
    return (
        <div className="mb-5 pb-5 login">
            <h2 className="text-dark  log">Please Login</h2>
            {user?.email ? (
                <button
                    className="btn btn-danger logOut"
                    onClick={handleLogOut}
                >
                    Log Out
                </button>
            ) : (
                <button className="btn btn-primary login" onClick={handleLogIn}>
                    Log In
                </button>
            )}
        </div>
    );
};

export default Login;
