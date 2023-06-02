import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { AiOutlineSend } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';

const Profile = () => {
	const { userProfile, resetPassword } = useContext(AuthContext);
	const [file, setFile] = useState(null);
	const [enterUserEmail, setEnterUserEmail] = useState('');
	const inputRef = useRef(null);

	const handleChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("email", userProfile?.email);
		formData.append("file", file);
		try {
			const res = await fetch("http://localhost:5000/api/v1/file/upload", {
				method: "POST",
				body: formData,
			});
			const data = await res.json();
			if (data.modifiedCount === 1) {
				window.location.reload();
			}
		} catch (err) { }
	};

	const handleEmailOnBlur = event => {
        const email = event.target.value;
		if(userProfile.email === email){
			setEnterUserEmail(email);
		}
    }

	const handleResetPassword = () => {
        if (enterUserEmail) {
            resetPassword(enterUserEmail)
                .then(() => {
                    toast.success("Email Sent! Please check your email.");
					inputRef.current.value = '';
					setEnterUserEmail('');
                })
                .then(err => { })
        }
        else {
            toast.error("Error! Please Enter your registered email.");
			inputRef.current.value = '';
        }
    }

	return (
		<div>
			<div>
				<h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
					<i>
						Profile_
					</i>
				</h3>
			</div>
			<div className='flex justify-center items-center m-5'>
				<div className="w-full w-5/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
					<div className='w-full lg:flex justify-center items-center'>
						<div className='w-1/2 m-5 flex justify-center items-center'>
							{
								userProfile?.pic
									?
									<div>
										<div className='lg:flex justify-center items-center my-5'>
											<img className="w-40 h-40 mb-3 rounded-full shadow-lg" src={userProfile?.pic} alt="Loading..." />
										</div>
										<p className='text-center text-2xl font-bold italic my-2 text-[#0E7490]'>Update Profile Picture</p>
										<hr></hr>
										<form onSubmit={handleUpload}>
											<input type="file" onChange={handleChange} />
											<div className='text-center'>
												<button value="submit" className='btn bg-[#0E7490]'>
													Update
												</button>
											</div>
										</form>
									</div>
									:
									<div>
										<div className='lg:flex justify-center items-center my-5'>
											<img className="w-40 h-40 mb-3 rounded-full shadow-lg" src='https://i.ibb.co/6r3zmMg/user.jpg' alt="Loading..." />
										</div>
										<p className='text-center text-2xl font-bold italic my-2 text-[#0E7490]'>Upload Profile Picture</p>
										<hr></hr>
										<form onSubmit={handleUpload}>
											<input type="file" onChange={handleChange} />
											<div className='text-center'>
												<button value="submit" className='btn bg-[#0E7490]'>
													Submit
												</button>
											</div>
										</form>
									</div>
							}
						</div>
						<div className='w-1/2 m-5'>
							<p className='text-2xl font-bold italic my-2 text-[#0E7490]'>Name</p>
							<hr></hr>
							<p className="mb-5 text-xl font-bold"> {userProfile?.name}</p>
							<p className='text-2xl font-bold italic my-2 text-[#0E7490]'>Email</p>
							<hr></hr>
							<p className="mb-5 text-xl font-bold">{userProfile?.email}</p>
							<p className='text-2xl font-bold italic my-2 text-[#0E7490]'>Role</p>
							<hr></hr>
							<p className="mb-5 text-xl font-bold">
								{
									(userProfile?.status) === 'admin' ? "✓ Admin | ✓ User" : "✓ User | ✗ Admin"
								}
							</p>
							<p className='text-2xl font-bold italic my-2 text-[#0E7490]'>Change Password</p>
							<hr></hr>
							<div className='flex justify-between items-center'>
								<input
									type="email"
									placeholder="Please Enter your Email"
									className="input input-border w-full max-w-xs rounded-full"
									onBlur={handleEmailOnBlur}
									ref={inputRef}
								/>
								<button
									value="submit"
									className='btn mx-auto bg-[#0E7490]'
									onClick={handleResetPassword}
								>
									Send <AiOutlineSend className="ml-2" />
									</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;