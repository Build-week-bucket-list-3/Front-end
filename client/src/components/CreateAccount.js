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
    const [data, setData] = useState({})
    // functions for forms
    function handleChange(event){
        
        // console.log(Key);
        
       
       return setUserData(
       
            {...userData, [event.target.name]: event.target.value}
            
       );
    } 
    function pwdCheck(pwd, check){
        if(pwd === check){
            return {
                name: userData.username,
                email: userData.email,
                password: userData.password


            }
        }else{
            alert("Password to not match");
            return false;
            
        }
    }


    function handelSubmit(event){
        event.preventDefault();
        setData(pwdCheck(userData.password, userData.confirmPassword));
        if (data !== false){
            return data;
        }
          
    }

    useEffect(()=>{
        console.log(data);
        if(data !== false){
            axios.post('',data).then((resp)=>{
                console.log(resp);
            }).catch((error => console.log(error)));

            
        }
    },[data]);


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