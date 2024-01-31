import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../services/action/login.action';


const Login = () => {

    const { err } = useSelector(state => state.loginReducer);

    const dispatch = useDispatch();

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(login.email, login.password));
        // console.log('login',login);
    }

    if (err) {
        return (
            <h1 className='fs-1 text-danger text-center pt-5' >{err}</h1>
        )
    }
    else {
        return (
            <>
                <section className='login'>
                    <Form onSubmit={handleSubmit}>

                        <h2 className='text-center mb-4'>Login</h2>

                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" value={login.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} className='mt-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" value={login.password} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mt-3 login-btn me-3'>
                            Login
                        </Button>
                    </Form>
                </section>
            </>
        )
    }


}

export default Login