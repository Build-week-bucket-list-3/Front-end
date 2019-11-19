import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SignIn = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();

  const handleChange = event => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const endpoint = '/login';

    axiosWithAuth()
      .post(endpoint, userCredentials)
      .then(response => {
        const token = response.data.payload;
        sessionStorage.setItem('token', token);
        history.push('users/bucketlists/all')
      })
      .catch(error => console.log('login error', error))
  };

  return (
    <div className='sign-in'>
      <div>
        <h2>Sign in</h2>
        <p>or&nbsp;
          <a href='/signup'>create an account</a>
        </p>
      </div>
      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='form-control'
            type='text'
            name='email'
            onChange={handleChange}
            value={userCredentials.email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            onChange={handleChange}
            value={userCredentials.password}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary'>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
