import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DoctorHandle = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/doctor`)
            .then(response => {
                setDoctor(response.data.result)
            })
            .catch(error => { })
    }, []);

    const deleteDoctor = (e) => {
        axios.delete(`http://localhost:5000/api/v1/doctor/${e}`)
            .then(response => {
                const filter = doctor.filter(item => item._id !== e);
                setDoctor(filter)
            })
            .catch(error => { })
    }

    return (
        <div className='container mx-auto'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        All Doctors_
                    </i>
                </h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>Doctor</th>
                            <th>Specialist</th>
                            <th>Doctor Fee</th>
                            <th className='text-center'>Edit</th>
                            <th className='text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctor.map((doctor, index) => <tr key={doctor._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.imgUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{doctor.specialist}</span>
                                </td>
                                <td>

                                    <span className="badge badge-ghost badge-sm">{doctor.fee} BDT/- </span>
                                </td>
                                <td>
                                    <div className='flex justify-center items-center'>
                                        <Link to={`/dashboard/doctor/edit/${doctor._id}`}><button title="edit" className="btn btn-ghost"  >
                                            <AiFillEdit size={22} />
                                        </button></Link>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex justify-center items-center'>
                                        <button title="delete" className="btn btn-ghost" onClick={() => deleteDoctor(doctor._id)}>
                                            < AiFillDelete size={22} />
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorHandle;