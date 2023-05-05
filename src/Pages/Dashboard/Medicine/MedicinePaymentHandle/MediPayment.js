import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCheckCircleFill } from 'react-icons/bs';

const MediPayment = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/medicine/init`)
            .then(response => {
                setOrder(response.data.result);
            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }, []);

    const onSubmit = (e) => {
        axios.patch(`http://localhost:5000/api/v1/medicine/init/${e}`)
            .then(res => { })
            .catch(err => { })
    }

    return (
        <div className='container mx-auto max-h-500 overflow-y-auto'>
            <div div className="overflow-x-auto">
                <div>
                    <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                        <i>
                            Medicine Ordered by Customers_
                        </i>
                    </h3>
                </div>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>Sl. No.</th>
                            <th>Customer Name</th>
                            <th>Product</th>
                            <th>Delivery Address</th>
                            <th className='text-center'>Mobile No.</th>
                            <th className='text-right'>Total Amount</th>
                            <th className='text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((item, i) => <tr>
                                <th className='text-center'>
                                    {
                                        `${i + 1}` < 10
                                            ?
                                            `0${i + 1}`
                                            :
                                            `${i + 1}`
                                    }
                                </th>
                                <td>{item?.cus_name}</td>
                                <td>{item?.product_name}</td>
                                <td>{item?.cus_city}</td>
                                <td className='text-center'>{item?.cus_phone}</td>
                                <td className='text-right'>৳ {item?.total_amount}/-</td>
                                <td className='text-center'>

                                    {
                                        item.status === 'deliver'
                                            ?
                                            <p className='flex justify-center items-center italic text-[green] font-bold'>
                                                <BsCheckCircleFill className='mr-1' /><>Delivered</>
                                            </p>
                                            :
                                            <div className='flex justify-center items-center'>
                                                <button
                                                    className='w-50 bg-[#0E7490]'
                                                    onClick={() => onSubmit(item?._id)}
                                                >
                                                    <p className='flex justify-center items-center text-[white] font-bold'>
                                                        <BsCheckCircleFill className='mr-1' /><>Make Delivery</>
                                                    </p>
                                                </button>
                                            </div>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MediPayment;