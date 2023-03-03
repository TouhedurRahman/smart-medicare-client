import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../hooks/useToken';
const Sign = () => {
  const [data, setData] = useState({})
  const [upload, setUpload] = useState(null)
  const { createUser, error, updateUser } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail);

  // const from = location.state?.from?.pathname || '/';
  const signUpValue = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[field] = value;
    setData(newData)
  }
  const handleSubmit = (e) => {
    if (data.password !== data.confirmPassword) {
      window.alert("mismatch password");
    }
    else {
      createUser(data.email, data.password)
        .then((result) => {
          const user = result.user;
          // setUser(user);
          // saveUser(data)
          updateUser({
            displayName: data.name
          }).then(() => {
            saveUser(data)
            navigate("/")
          }).catch((error) => {
            // An error occurred
            // ...
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

        });

    }

    e.preventDefault()
  }
  const saveUser = (data) => {
    axios.post(`http://localhost:5000/api/v1/sign`, { email: data.email, name: data.name })
      .then(response => {

        setCreatedUserEmail(response?.data?.user?.email);
      })
      .catch(error => {
      })
  }
  return (
    <div className="form-login-container sign-up-login-container">

      <form onSubmit={handleSubmit} className="forms">
        {error && <div className="alert alert-warning shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>Warning:  {error}</span>
          </div>
        </div>}
        <input type="text" placeholder="Name" name="name" onChange={(e) => signUpValue(e)} />
        <input type="email" placeholder="Email" name="email" onChange={(e) => signUpValue(e)} />
        <input type="password" name="password" placeholder="Password" onChange={(e) => signUpValue(e)} />
        <input type="password" name="confirmPassword" placeholder="confirm Password" onChange={(e) => signUpValue(e)} />

        <button >Sign Up</button>
      </form>
    </div>
  );
};

export default Sign;