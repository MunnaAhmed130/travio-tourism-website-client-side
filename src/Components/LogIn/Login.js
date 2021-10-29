import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useLocation, useHistory } from 'react-router-dom';


const Login = () => {
    const { handleGoogleLogIn, user, handleLogOut } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handleLogIn = () => {
        handleGoogleLogIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            {
                user?.email ? <button onClick={handleLogOut}>Log Out</button> : <button onClick={handleLogIn}>Log In</button>
            }

            {/* <button onClick={handleGoogleLogIn}>Log In</button> */}

        </div>
    );
};

export default Login;