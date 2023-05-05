import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Medicine = () => {
    const [medicine, setMedicine] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/medicine`)
            .then(response => {
                setMedicine(response.data.result.result)
            })
            .catch(error => { })
    }, []);

    const deletemedicine = (e) => {
        axios.delete(`http://localhost:5000/api/v1/medicine/${e}`)
            .then(response => {
                const filter = medicine.filter(item => item._id !== e);
                setMedicine(filter);
            })
            .catch(error => { })
    }

    return (
        <div className='container mx-auto'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        All Medicines_
                    </i>
                </h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Medicine</th>
                            <th>Brand</th>
                            <th>Fee</th>
                            <th className='text-center'>Action</th>
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
                                    <div>
                                        <div className="font-bold">{medicine.brand.name}</div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-ghost badge-sm">{medicine.price} BDT/- </span></td>
                                <th>
                                    <div className='flex justify-center items-center'>
                                        <button title="delete" className="btn btn-ghost" onClick={() => deletemedicine(medicine._id)}>
                                            < AiFillDelete size={22} />
                                        </button>
                                    </div>

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