import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';


const CreateAccount = (props) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {

        console.log(data)

    };

    // useEffect(()=>{

    // },[]);

    return (

        <div className='create-account-container'>
            <h2>Create your account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input className='form-control' type='text' name='username' id='username' ref={register({ required: true })} />
                    {errors.username && 'Field is required!'}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input className='form-control' type='text' name='email' id='email' ref={register({
                        required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "field Required"
                        }
                    })} />
                    {errors.email && errors.email.message}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input className='form-control' type='password' name='password' id='password' ref={register({ required: true, minLength: 4 })} />
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input className='form-control' type='password' name='confirmPassword' id='confirmPassword' ref={register({ required: true, minLength: 4 })} />
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary'>Create Account</button>
                </div>
            </form>
        </div>

    );



}

export default CreateAccount;