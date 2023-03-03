import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MediOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/medicine/init`)
            .then(response => {
                setOrder(response.data.result)
            })
            .catch(error => {
                // setError(error.message)
            })
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-4'>
                {
                    order.map((item) => <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-medium text-gray-800">cus name : {item?.cus_name}</h2>
                        <h2 className="text-lg font-medium text-gray-800">product : {item?.product_name}</h2>
                        <h2 className="text-lg font-medium text-gray-800">total_amount : {item?.total_amount}</h2>
                        <p className="mt-2 text-gray-600">payment status : {item?.payment}</p>
                        <p className="mt-2 text-gray-600">cus city : {item?.cus_city}</p>
                        <p>deliver : {item?.status}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MediOrder;