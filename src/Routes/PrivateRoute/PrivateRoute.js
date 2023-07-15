import React, { Children, useContext } from 'react';
import './PrivateRoute.css';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';
import { AiOutlineReload } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { toast } from 'react-hot-toast';
import Loading from '../../Pages/Shared/Loading/loading';

const PrivateRoute = ({ children }) => {
    let { user, isLoading, emailVerification } = useContext(AuthContext)
    const location = useLocation();
    if (isLoading) {
        return <Loading />
    }
    if (!user.email) {
        return <Navigate to="/user/login" state={{ from: location }} replace />
    }

    if (!user.emailVerified) {
        return (
            <div className='text-center'>
                <div className='m-3 mx-auto flex justify-center'>
                    <img style={
                        {
                            borderRadius: '10%',
                            width: '300px',
                            height: '150px',
                            marginTop: '20px'
                        }
                    }
                        src="https://i.ibb.co/y8Kb2Cd/email-notification.jpg" alt="email-notification" />
                </div>
                <div>
                    <h1 className='text-[green] font-bold'>Please, Verify your Account</h1>
                    <div className="mx-auto m-3" style={{ maxWidth: '300px', }}>
                        <p>
                            Thanks for signingup with us.
                            <br />
                            Your account is <span className='text-[red] font-bold'>not verified</span> yet.
                            <br />
                            Please Cheak your email
                            <br />
                            <span className='text-xl text-[red] font-bold]'>
                                ({user.email})
                            </span>
                            <br />
                            and verify your account.
                            If you don't get any verification email, click the button bellow to get verification email again or click reload button.
                        </p>
                    </div>
                    <button
                        onClick={
                            async () => {
                                await emailVerification();
                                toast.success('Email sent!');
                            }
                        }
                        className="btn-pr"
                    >
                        <BiMailSend className='font-bold me-2' />Re-send Verification Email
                    </button>

                    <button
                        onClick={
                            () => window.location.reload()
                        }
                        className='btn-pr ms-3'
                    >
                        <AiOutlineReload className='font-bold me-2' />Reload
                    </button>

                    <div className="mx-auto mt-3 mb-5" style={{ maxWidth: '280px', }}>
                        <p>
                            If this email wasn't intended for you feel free to delete it, Thak you.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return children;
};

export default PrivateRoute;