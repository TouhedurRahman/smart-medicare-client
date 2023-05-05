import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const MdicineBrand = () => {
    const [medicineBrand, setmedicineBrand] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/medicinebrand`)
            .then(response => {
                setmedicineBrand(response.data.result)
            })
            .catch(error => { })
    }, []);

    const deleteBrand = (e) => {
        axios.delete(`http://localhost:5000/api/v1/medicinebrand/${e}`)
            .then(response => {
                const filter = medicineBrand.filter(item => item._id !== e);
                setmedicineBrand(filter);
            })
            .catch(error => { })
    }

    return (
        <div className='container mx-auto'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        All Medicine Brands_
                    </i>
                </h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Brand Name</th>
                            <th className='text-center'>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicineBrand.map((brand) => <tr key={brand._id}>
                                <td>
                                    <div className="flex justify-center items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={brand.imgRef} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <div className='flex justify-center items-center'>
                                        <div className="font-bold">{brand.name}</div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex justify-center items-center'>
                                        <button title="delete" className="btn btn-ghost" onClick={() => deleteBrand(brand._id)}>
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

export default MdicineBrand;