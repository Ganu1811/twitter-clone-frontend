import React, { useState } from 'react'
import twitterImage from '../../assets/images/Twitterlogo.jpg';
import XIcon from '@mui/icons-material/X';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errormessage,setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const Navigate = useNavigate();
      
      const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

      if(user||googleuser){
        Navigate('/');
        console.log(user);
        console.log(googleuser);
      }
      if(error||googleerror){
        console.log(error);
        console.log(googleerror);
      }
      if(loading||googleloading){
        console.log("loading..");
        console.log(googleloading);
      }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(email,password);
    }
    const handleGoogleSignIn = ()=>{
        signInWithGoogle();
    }

  return (
    <div className='login-container'>
        <div className='image-container'>
           <img className='image' src={twitterImage} alt=''></img>
        </div>
        <div className='form-container'>
            <XIcon/>
            <h2>happening now</h2>
            <form onSubmit={handleSubmit}>
                <input 
                   type='email'
                   className='email'
                   placeholder='Email address'
                   onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                   type='password'
                   className='password'
                   placeholder='password'
                   onChange={(e)=>setPassword(e.target.value)}
                />
                <div className='btn-login'>
                    <button type='submit' className='btn'>Login</button>
                    
                </div>
            </form>
            <hr/>
            <div className='google-button'>
                <GoogleButton
                className='g-btn'
                type='light'
                onClick={handleGoogleSignIn}
                />
            </div>
            <div>
                Don't have an account?
                <Link to='/signup' style={{textDecoration:'none', color:'white', fontWeight:'600', marginLeft:'5px'}}>
                Signup
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login