import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
const Medicine = () => {
    const [medicine, setmedicine] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/medicine`)
            .then(response => {

                setmedicine(response.data.result.result)
            })
            .catch(error => {
                // setError(error.message)
            })
    }, [])
    const deletemedicine = (e) => {
        // e.preventDefault();

        axios.delete(`http://localhost:5000/api/v1/medicine/${e}`)
            .then(response => {
                const filter = medicine.filter(item => item._id !== e);
                setmedicine(filter)
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

                            <th>Fee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicine.map((medicine, index) => <tr key={medicine._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={medicine.imgUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{medicine.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>

                                    <span className="badge badge-ghost badge-sm">{medicine.price} BDT/- </span></td>
                                <th>
                                    <button title="delete" className="btn btn-ghost" onClick={() => deletemedicine(medicine._id)}>
                                        < AiFillDelete size={22} />
                                    </button>

                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Medicine;