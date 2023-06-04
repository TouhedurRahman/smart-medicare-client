import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn, error, resetPassword } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const [enterUserEmail, setEnterUserEmail] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        signIn(userData)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user.email);
                navigate(from, { replace: true });

            })
            .catch(error => {
                // setLoginError(error.message);
            });
        emailRef.current.value = ""
        passwordRef.current.value = ""
    }

    const handleEmailOnBlur = event => {
        const email = event.target.value;
        setEnterUserEmail(email);
    }

    const handleResetPassword = () => {
        if (enterUserEmail) {
            resetPassword(enterUserEmail)
                .then(() => {
                    toast.success("Email Sent! Please check your email.");
                    emailRef.current.value = '';
                    setEnterUserEmail('');
                })
                .then(err => { })
        }
        else {
            toast.error("Error! Please Enter your registered email.");
            emailRef.current.value = '';
        }
    }

    return (
        <div className="form-login-container sign-in-login-container">
            {
                error &&
                <div className="alert alert-warning shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>
                            Warning:  {error}
                        </span>
                    </div>
                </div>
            }
            <form onSubmit={handleOnSubmit} className="forms">
                <h1 className='text-white text-2xl font-bold mb-5'>Please Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className='rounded-xl'
                    ref={emailRef}
                    onBlur={handleEmailOnBlur}
                />
                <input
                    type={passwordShown ? "text" : "password"}
                    placeholder="Password"
                    className='rounded-xl'
                    ref={passwordRef}
                />
                <div className="w-full mt-1">
                    <div className='flex justify-center items-center'>
                        <div>
                            <input
                                type="checkbox"
                                onClick={togglePassword}
                                className="form-check-input cursor-pointer"
                                id="showPasswordCheckbox"
                            />
                        </div>
                        <label
                            htmlFor="showPasswordCheckbox"
                            className="w-full text-[white] flex justify-start ml-1 cursor-pointer"
                        >
                            Show Password
                        </label>
                    </div>
                </div>
                <p className='w-full text-[white]'>
                    <div className='w-full flex justify-start items-center'>
                        Forget password?
                        <button
                            onClick={handleResetPassword}
                            className='btn btn-link text-[white] hover:text-[#F79706] text-decoration-none ml-1 p-0'
                        >
                            Reset Password
                        </button>
                    </div>
                </p>
                <button className='w-full hover:bg-[white] hover:text-[black] mb-5 rounded-xl'>Sign In</button>
            </form>
        </div>
    );
};

export default Login;