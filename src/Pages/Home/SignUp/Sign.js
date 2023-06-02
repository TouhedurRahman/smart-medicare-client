import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Sign = () => {
	const [data, setData] = useState({})
	const { createUser, error, updateUser } = useContext(AuthContext)
	const location = useLocation()
	const navigate = useNavigate();
	const [createdUserEmail, setCreatedUserEmail] = useState('')

	const from = location.state?.from?.pathname || '/';

	const signUpValue = e => {
		const field = e.target.name;
		const value = e.target.value;
		const newData = { ...data };
		newData[field] = value;
		setData(newData)
	}

	const handleSubmit = (e) => {
		if (data.password !== data.confirmPassword) {
			toast("Password and Confirm Password must be same.");
		} else {
			createUser(data.email, data.password)
				.then((result) => {
					const user = result.user;
					updateUser({
						displayName: data.name
					}).then(() => {
						saveUser(data)
						navigate("/")
					}).catch((error) => { });

				})
				.catch((error) => { });
		}
		e.preventDefault()
	}

	const saveUser = (data) => {
		axios.post(`http://localhost:5000/api/v1/sign`, { email: data.email, name: data.name })
			.then(response => {

				setCreatedUserEmail(response?.data?.user?.email);
			})
			.catch(error => { })
	}

	return (
		<div className="form-login-container sign-up-login-container">

			<form onSubmit={handleSubmit} className="forms">
				{
					error && <div className="alert alert-warning shadow-lg">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
							<span>Warning:  {error}</span>
						</div>
					</div>
				}
				<h1 className='text-white text-2xl font-bold mb-5'>Please Register</h1>
				<input
					type="text"
					placeholder="Name"
					className='rounded-full'
					name="name"
					onChange={(e) => signUpValue(e)}
				/>
				<input
					type="email"
					placeholder="Email"
					className='rounded-full'
					name="email"
					onChange={(e) => signUpValue(e)}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					className='rounded-full'
					onChange={(e) => signUpValue(e)}
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="confirm Password"
					className='rounded-full'
					onChange={(e) => signUpValue(e)}
				/>
				<button className='w-full hover:bg-[white] hover:text-[black] my-5'>Sign Up</button>
			</form>
		</div>
	);
};

export default Sign;