import React, { useState } from 'react';
import Sign from '../Home/SignUp/Sign';
import Login from './Login';
import './Login.css'
const LoginProcess = () => {
    const [toggler,setToggler] = useState(true)
    // const container = document.getElementById('login-container');
    const signUpClick = e => {
        setToggler(false)
    }
    const signInClick = e => { 
        setToggler(true)
    }
    return (
        <div className='container mx-auto text-center'>
           <div className='flex justify-center ...'>
           <div   className={toggler?'login-container':'login-container right-panel-active'} id="login-container">      
                   <Sign/>        
                  <Login/> 
                <div className="overlay-login-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => signInClick()}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => signUpClick()}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default LoginProcess;