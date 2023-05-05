import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router';
import { MdBloodtype } from 'react-icons/md';

const BloodCard = ({ donar, setStatus }) => {
    const { firstName, lastName, bloodGroup, gender, status, _id, file, phone, location } = donar;
    const { pathname } = useLocation();

    const statusCheck = (value, id) => {
        axios.patch(`http://localhost:5000/api/v1/blood/${id}`, { status: value })
            .then(response => {
                setStatus(value)
            })
            .catch(error => { })
    }

    return (
        <li className="pt-3 pb-5">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={file} alt="Blood Donar" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white m-[5px]">
                        {firstName} {lastName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400 mt-[5px] mx-[5px]">
                        {
                            gender === 'male' ? "Male" : "Female"
                        }
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400 mt-[5px] mx-[5px]">
                        {phone}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400 mt-[5px] mx-[5px]">
                        {location}
                    </p>
                </div>
                <div className="items-center text-base font-semibold text-gray-900 dark:text-white">
                    <p className='flex justify-end items-center'>{bloodGroup}<MdBloodtype className='text-[red] ml-1' /></p>
                    {
                        !pathname.includes('/dashboard/blood/donar')
                            ?
                            status === "inactive"
                                ?
                                <div>
                                    <h1 className='text-[red]'>Donated few days ago</h1>
                                </div>
                                :
                                <div>
                                    <h1 className='text-[green]'>Ready to Donate</h1>
                                </div>
                            :
                            ""
                    }
                    {
                        pathname === '/dashboard/blood/donar'
                        &&
                        <div className='w-full grid justify-center items-center'>
                            <label className='flex justify-center items-center'>{status === 'active' ? 'Active' : "Inactive"}</label>
                            <input
                                className='ml-1 mr-3 flex justify-center items-center'
                                type='checkbox'
                                checked={status === 'active' ? true : false}
                                value={status === "active" ? 'inactive' : 'active'}
                                onChange={(e) => statusCheck(e.target.value, _id)}
                                id='terms'
                            />
                        </div>
                    }
                </div>
            </div>
        </li>
    );
};

export default BloodCard;