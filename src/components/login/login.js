import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="m-5 text-center">
            <h1>Please Login</h1>
            <button onClick ={signInUsingGoogle} className="btn btn-primary  text-center">Google Sign in</button>
        </div>
    );
};

export default Login; 