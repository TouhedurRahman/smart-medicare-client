import axios from 'axios';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { BiSend } from 'react-icons/bi';

const MakeAdmin = () => {
    const adminRef = useRef();

    const onHandle = e => {
        const email = adminRef.current.value;

        axios.patch(`http://localhost:5000/api/v1/user/${email}`)
            .then(response => {

                toast.success(<h1>successfully make admin</h1>)
            })
            .catch(error => {
                toast.error(<h1>{error?.message}</h1>)
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make admin</h1>
            <form onSubmit={onHandle}>

                <input
                    className="bg-gray-200 border border-gray-400 p-2 w-full"
                    placeholder="Enter new admin email"
                    ref={adminRef}
                />
                <div className='text-center'>
                    <button
                        className="bg-blue-500 text-white p-2    hover:bg-blue-600 rounded-lg"
                        type="submit"
                    >
                        <span className='flex flex-center align-center  '><span>Send </span> <BiSend className='mt-1' /> </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;