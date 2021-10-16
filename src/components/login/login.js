import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="m-5 text-center g-5">
            <h1>Please Login</h1>
            <button onClick ={signInUsingGoogle} className="btn btn-danger  text-center m-2 w-50">Google</button>
            <br></br>
            <button onClick ={signInUsingGoogle} className="btn btn-secondary  text-center m-2 w-50">GitHub</button>
            <br></br>
            <button onClick ={signInUsingGoogle} className="btn btn-primary  text-center m-2 w-50">Facebook</button>
            <br></br>
            <button onClick ={signInUsingGoogle} className="btn btn-success  text-center m-2 w-50">Email</button>
        </div>
    );
}; 

export default Login; 