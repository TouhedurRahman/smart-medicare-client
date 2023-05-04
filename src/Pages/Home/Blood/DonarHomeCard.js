import React from 'react';
import { MdBloodtype } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';

const DonarHomeCard = ({ donar }) => {
    const { firstName, lastName, bloodGroup, gender, status, _id, file, phone, location } = donar;

    return (
        <div className="rounded shadow-lg">
            <div className="shadow-xl">
                <figure className="grid justify-center content-center px-10 pt-10">
                    <img src={file} alt="Blood_Donar" className="rounded-xl" style={{ height: "200px", width: "200px" }} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{firstName} {lastName}</h2>
                    <div className='w-full flex justify-between'>
                        <p className='flex justify-start items-center'>
                            <FaUserAlt className='text-[gray] mr-1' />
                            {
                                gender === 'male' ? "Male" : "Female"
                            }
                        </p>
                        <p className='flex justify-end items-center'>{phone}<GiRotaryPhone className='text-[green] ml-1' /></p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='flex justify-start items-center'><HiLocationMarker className='text-[gray] mr-1' />{location}</p>
                        <p className='flex justify-end items-center'>{bloodGroup}<MdBloodtype className='text-[red] ml-1' /></p>
                    </div>
                    <p>
                        {
                            status === 'active'
                                ?
                                <span className='text-[green]'>Ready to donate blood</span>
                                :
                                <span className='text-[red]'>Donated few months ago</span>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonarHomeCard;