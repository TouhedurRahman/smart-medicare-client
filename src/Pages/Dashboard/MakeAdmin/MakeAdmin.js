import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiSend } from 'react-icons/bi';

const MakeAdmin = () => {
    const [allUsers, setAllUsers] = useState([]);

    const adminRef = useRef();

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/user')
            .then(response => setAllUsers(response.data.result));
    }, []);

    const onHandle = e => {
        const email = adminRef.current.value;

        axios.patch(`http://localhost:5000/api/v1/user/${email}`)
            .then(response => {
                toast.success('successfully make admin');
            })
            .catch(error => {
                toast.error(`${error?.message}`);
            })
        e.preventDefault();
    }

    return (
        <div className='w-full max-h-500 overflow-y-auto'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        Make Admin_
                    </i>
                </h3>
            </div>
            <form onSubmit={onHandle}>
                <div className='w-1/2 mx-auto m-3'>
                    <input
                        className="bg-gray-200 border border-gray-400 p-2 w-full text-center rounded-full"
                        placeholder="Enter Email to Make New Admin"
                        ref={adminRef}
                        onFocus
                    />
                </div>
                <div className='text-center'>
                    <button
                        className="bg-blue-500 text-white p-2 hover:bg-blue-600 rounded-lg"
                        type="submit"
                    >
                        <span className='flex flex-center align-center  '><span>Send </span> <BiSend className='mt-1' /> </span>
                    </button>
                </div>
            </form>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        All Users_
                    </i>
                </h3>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-center'>Sl. No.</th>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className='text-center'>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((allUser, i) => <tr>
                                    <th className='text-center'>
                                        {
                                            `${i + 1}` < 10
                                                ?
                                                `0${i + 1}`
                                                :
                                                `${i + 1}`
                                        }
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={allUser.pic} alt='User...' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{allUser.name}</td>
                                    <td>{allUser.email}</td>
                                    <td className='text-center'>
                                        {
                                            allUser.status === 'admin'
                                                ?
                                                'Admin'
                                                :
                                                'User'
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;