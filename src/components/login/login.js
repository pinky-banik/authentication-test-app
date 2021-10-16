import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="m-5 text-center g-5 p-5">
            
            <div className="d-flex row">
                
                <div className="col-6 h-100">
                <h1>Please Login</h1>
                <button onClick ={signInUsingGoogle} className="btn btn-danger  text-center m-3 w-50">Google</button>
            <br></br>
            <button onClick ={signInUsingGoogle} className="btn btn-secondary  text-center m-3 w-50">GitHub</button>
            <br></br>
            <button onClick ={signInUsingGoogle} className="btn btn-primary  text-center m-3 w-50">Facebook</button>
            <br></br>
            <button onClick ={signInUsingGoogle} className="btn btn-success  text-center m-3 w-50">Email</button>
                </div>
                <div className="col-6">
                    <h1>sign in form</h1>
                    <div className="w-100 mx-auto p-3 border-3 border border-info">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your u5u5uemail with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>     
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Login; 