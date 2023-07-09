import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import img from '../../../assets/ui-animation.gif';

const Success = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/order/${id}`)
            .then(response => {
                setOrder(response?.data?.result)
            })
            .catch(error => { })
    }, [id])

    const paymentSuccess = e => {
        axios.post(`http://localhost:5000/api/v1/order`, {
            tran_id: id,
            val_id: order?.val_id
        })
            .then(response => {
                navigate("/");
            })
            .catch(error => { })
    }

    return (
        <div>
            <div className='mx-auto text-center rounded-full'>
                <div className='m-5'>
                    <img src={img} alt="...loading" style={{ display: 'block', margin: '0 auto', borderRadius: '10%' }} />
                </div>
            </div>
            <div className='text-center'>
                {/* <h1> name of customer  {order?.cus_name} </h1> */}
                <button className='bg-[#0E7490]' onClick={() => paymentSuccess(id)}>Confirm Order</button>
            </div>
        </div>
    );
};

export default Success;