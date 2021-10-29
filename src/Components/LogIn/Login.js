import React from 'react';
import UseAuth from '../../Hooks/UseAuth';


const Login = () => {
    const { handleGoogleLogIn, user, handleLogOut } = UseAuth();
    return (
        <div>
            <h2>Please Login</h2>
            {
                user?.email ? <button onClick={handleLogOut}>Log Out</button> : <button onClick={handleGoogleLogIn}>Log In</button>
            }

            {/* <button onClick={handleGoogleLogIn}>Log In</button> */}

        </div>
    );
};

export default Login;