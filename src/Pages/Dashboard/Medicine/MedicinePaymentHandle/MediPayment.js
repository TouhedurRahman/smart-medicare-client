import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const MediPayment = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/medicine/init`)
            .then(response => {
                setOrder(response.data.result)
            })
            .catch(error => {
                // setError(error.message)
                toast.error(<h1>{error.message}</h1>)
            })
    }, [])
    const onSubmit = (e) => {
        axios.patch(`http://localhost:5000/api/v1/medicine/init/${e}`)
            .then(res => {

            })
            .catch(err => {

            })
    }
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-4'>
                {
                    order.map((item) => <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-medium text-gray-800">cus name : {item?.cus_name}</h2>
                        <h2 className="text-lg font-medium text-gray-800">product : {item?.product_name}</h2>

                        <p className="mt-2 text-gray-600">payment status : {item?.payment}</p>
                        <p className="mt-2 text-gray-600">cus city : {item?.cus_city}</p>
                        <p>deliver : {item?.status}</p>
                        <button onClick={() => onSubmit(item?._id)}> {item.status === "deliver" ? "deliver" : "pending"} </button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MediPayment;