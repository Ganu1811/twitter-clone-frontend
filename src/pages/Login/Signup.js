import React, { useState } from 'react'
import twitterImage from '../../assets/images/Twitterlogo.jpg';
import XIcon from '@mui/icons-material/X';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';



function Signup() {

    const [username,setUsername] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
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
        //console.log(username, email, password, error);
        createUserWithEmailAndPassword(email,password);

        const user = {
          username:username,
          name:name,
          email:email,
        }

        axios.post("https://twitter-clone-backend-ruby.vercel.app/register", user);

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
            <div className='form-box'>
                {/*<XIcon className='Twittericon' style={{color:'black'}}/>*/}
                <h1 className='heading'>happening now</h1>
                <h3 className='heading1'>Join today.</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        className='username'
                        placeholder='@username'
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input 
                        type='text'
                        className='name'
                        placeholder='Enter full name'
                        onChange={(e)=>setName(e.target.value)}
                    />
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
                        <button type='submit' className='btn'>Signup</button>       
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
                    Already have an account?
                    <Link to='/login' style={{textDecoration:'none', color:'white', fontWeight:'600', marginLeft:'5px'}}>
                    Login
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup