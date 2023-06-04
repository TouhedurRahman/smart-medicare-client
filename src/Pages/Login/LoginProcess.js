import React, { useState } from 'react';
import Sign from '../Home/SignUp/Sign';
import Login from './Login';
import './Login.css';

const LoginProcess = () => {
    const [toggler, setToggler] = useState(true)

    const signUpClick = e => {
        setToggler(false)
    }

    const signInClick = e => {
        setToggler(true)
    }

    return (
        <div className='container mx-auto text-center my-5 rounded-full'>
            <div className='flex justify-center'>
                <div className={toggler ? 'login-container' : 'login-container right-panel-active'} id="login-container">
                    <Sign />
                    <Login />
                    <div className="overlay-login-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className='text-[black] text-2xl font-bold'>Welcome Back!</h1>
                                <p className='login-p text-[black] font-bold'>Already have an account? Please sign in and stay with us.</p>
                                <button className="bg-[white] text-[black] border-[black] hover:bg-[black] hover:text-[white] hover: border-[white]" id="signIn" onClick={() => signInClick()}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className='text-[black] text-2xl font-bold'>Smart MediCare</h1>
                                <p className='login-p text-[black] font-bold'>Don't have any account? Enter your personal details and start journey with us.</p>
                                <button className="bg-[white] text-[black] border-[black] hover:bg-[black] hover:text-[white] hover: border-[white]" id="signUp" onClick={() => signUpClick()}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginProcess;