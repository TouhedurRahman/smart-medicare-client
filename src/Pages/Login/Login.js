import React, { useContext, useRef,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn, error, loader, setLoader } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    
    const from = location.state?.from?.pathname || '/';

    
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
    return (
        <div className="form-login-container sign-in-login-container">
            {error && <div className="alert alert-warning shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Warning:  {error}</span>
                </div>
            </div>}
            <form onSubmit={handleOnSubmit} className="forms">
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" ref={emailRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button>Sign In</button>
            </form>
        </div>
    );
};

export default Login;