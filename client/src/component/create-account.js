import React, {useState,useEffect} from 'react';
import axios from 'axios';


const CreateAccount = (props) => {
    //user data obj
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    // functions for forms
    function handleChange(event){
        const eventName = event.target.name;
        const eventValue = event.target.value;
        // console.log(Key);
        
       
       return setUserData(
       
            {...userData, [event.target.name]: event.target.value}
            
       );
    } 
   
    function handelSubmit(event){
        event.preventDefault();
        
        axios.post('',userData).then((resp) => {


        }
        ).catch(error => console.log(`error: ${error}`));
    
    
    }




    return (

        <div className='create-account-container'>
            <div>
                
                <h2>Create an account</h2>
            </div>
            <form onSubmit={handelSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='username' onChange={handleChange} value={userData.username}/>
                {console.log(userData)}
                <label htmlFor='email'>Email Address</label>
                <input type='text' name='email' id='email' onChange={handleChange} value={userData.email}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' onChange={handleChange} value={userData.password}/>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='password' name='confirmPassword' id='confirmPassword' onChange={handleChange} value={userData.confirmPassword}/>
                <button>Create Accout</button>
            </form>
        </div>

    );





}

export default CreateAccount;