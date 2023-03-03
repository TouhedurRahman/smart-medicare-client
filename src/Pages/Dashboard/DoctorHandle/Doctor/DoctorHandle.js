import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdOutlinePayment   } from 'react-icons/md';
import {  AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const DoctorHandle = () => {
    const [doctor,setDoctor] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/doctor`)
        .then(response => {
            
            setDoctor(response.data.result)
        })
        .catch(error => {
            // setError(error.message)
        })
    },[])
        // e.preventDefault();
        const deleteDoctor = (e)=>{
            // e.preventDefault();
           
            axios.delete(`http://localhost:5000/api/v1/doctor/${e}` )
                .then(response => {
                   
                        const filter = doctor.filter(item=>item._id!==e);
                        setDoctor(filter)
                        
                     
                    // setAppointment(res.data.result)
                })
                .catch(error => {
                    // setError(error.message)
                })
               
        }     
    
    return (
        <div className='container mx-auto'>
         <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specialist</th>
                        <th>Patient Name</th>
                        <th>Action</th>
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
                                 
                                <span className="badge badge-ghost badge-sm">{doctor.fee} BDT/- </span></td>
                            <th>
                            <button title="delete" className="btn btn-ghost" onClick={()=>deleteDoctor(doctor._id) }>
                                < AiFillDelete size={22}/>
                                </button>
                                <Link to={`/dashboard/doctor/edit/${doctor._id}`}><button title="edit" className="btn btn-ghost"  >
                                <AiFillEdit size={22}/>
                                </button></Link>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>  
    </div>
    );
};

export default DoctorHandle;