import React, {useState,useEffect} from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';


const CreateAccount = (props) => {
    const {register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {
        
        console.log(data)
        
    };

    // useEffect(()=>{
        

            
        
    // },[]);


    return (

        <div className='create-account-container'>
            <div>
                
                <h2>Create an account</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='username' ref={register({required:true})} />
                {errors.username && 'Field is required!'}
                
                <label htmlFor='email'>Email Address</label>
                <input type='text' name='email' id='email' ref={register({required:true, pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message:"field Required"} })} />
                {errors.email && errors.email.message}            
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password'ref={register({required:true, minLength: 4})} />
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='password' name='confirmPassword' id='confirmPassword' ref={register({required:true, minLength: 4})} />
                <button>Create Accout</button>
            </form>
        </div>

    );





}

export default CreateAccount;