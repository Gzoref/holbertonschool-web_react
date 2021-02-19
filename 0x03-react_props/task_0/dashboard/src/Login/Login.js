import React, { Fragment } from 'react';
import './Login.css';

const Login = () => {
    return (
        <Fragment>
            <p>Log in to access the full dashboard</p>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' id='email' />
            <button>OK</button>
        </Fragment>
    )
}

export default Login;
