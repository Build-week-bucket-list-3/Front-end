import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosLogin as axios } from '../utils/axiosLogin'

const SignIn = props => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
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
    // post request to retrieve a token from the backend
    event.preventDefault();
    const endpoint = '/login';

    axios().post(endpoint, `grant_type=password&username=${userCredentials.username}&password=${userCredentials.password}`)
      .then(response => {
        console.log("login response", response.data);
        const token = response.data.access_token;
        sessionStorage.setItem('token', token);
        // once token is handeled, navigate to XXX page
        history.push('users/bucketlists/all')
      })
      .catch(error => console.log('login error', error.response));

  };

  return (
    <div className='sign-in'>
      <div>
        <h2>Sign in</h2>
        <p>or&nbsp;
          <a href='/register'>create an account</a>
        </p>
      </div>
      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            className='form-control'
            type='text'
            name='username'
            onChange={handleChange}
            value={userCredentials.username}
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
          <button className='btn btn-primary' type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
