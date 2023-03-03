import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const MdicineBrand = () => {
    const [medicineBrand, setmedicineBrand] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/medicinebrand`)
            .then(response => {

                setmedicineBrand(response.data.result)
            })
            .catch(error => {
                // setError(error.message)
            })
    }, [])
    const deleteBrand = (e) => {
        // e.preventDefault();

        axios.delete(`http://localhost:5000/api/v1/medicinebrand/${e}`)
            .then(response => {
                const filter = medicineBrand.filter(item => item._id !== e);
                setmedicineBrand(filter)
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
                            <th>Image</th>
                            <th>Brand Name</th>

                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicineBrand.map((brand) => <tr key={brand._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={brand.imgRef} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
 
 
                                <th>
                                    <div>
                                        <div className="font-bold">{brand.name}</div>
                                    </div>

                                </th>
                                <th>
                                    <button title="delete" className="btn btn-ghost" onClick={() => deleteBrand(brand._id)}>
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

export default MdicineBrand;