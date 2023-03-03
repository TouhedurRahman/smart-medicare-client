import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Rating from 'react-rating';
import { toast } from 'react-hot-toast';
const MyAppointment = () => {
    const [appointment, setAppointment] = useState([])
    const { user, token } = useContext(AuthContext)
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/appointment?userEmail=${user?.email}`)
            .then(res => {
                setAppointment(res.data.result)
            })
            .catch(error => {
                // setError(error.message)
                toast.error(<h1>  {error?.response?.data?.error}</h1>);
            })
    }, [user?.email])

    const payment = (data) => {
        
        axios.post(`http://localhost:5000/api/v1/init`,{
            name:data.patientName,
            id:data._id,
            phone:data?.contactNumber,
            category:data?.specialist
        })
            .then(res => {
                window.location.replace(res.data.result)
                // setAppointment(res.data.result)
            })
            .catch(error => {
                toast.error(<h1>  {error?.response?.data?.error}</h1>);
            })
        
    }
    const rating = (ratingValue, id) => {
        const confirm = window.confirm("are u sure give a riveiw")
        if (confirm) {
            axios.post(`http://localhost:5000/api/v1/appointment/${id}`, { ratingValue, id })
                .then(response => {
                    toast.success(<h2>congrats you can successfully added medicine  </h2>)
                })
                .catch(error => {
                    // setError(error.response.data.error)
                    toast.error(<h1>  {error?.response?.data?.error}</h1>);
    
                })
        }
    }
    const deleteAppointment = (e) => {
        // e.preventDefault();
        axios.delete(`http://localhost:5000/api/v1/appointment/${e}`, config)
            .then(response => {
                if (response.data.result.deletedCount) {
                    const filter = appointment.filter(item => item._id !== e);
                    setAppointment(filter)
                }
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
                            <th>Chamber</th>
                            <th>Visit Time</th>
                            <th>Patient Name</th>
                            <th>Rating</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((appointment, index) => <tr key={appointment._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={appointment.imgUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{appointment.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{appointment.specialist}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{appointment.chamber}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{appointment.visitTime}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{appointment.patientName}</span>
                                </td>


                                <td>

                                    <Rating
                                        emptySymbol="fa-regular fa-star "
                                        fullSymbol="fa fa-star"
                                        onChange={(e) => rating(e, appointment.doctorId)}

                                    />

                                </td>
                                <td>
                                    <button title="delete" className="btn btn-ghost" onClick={() => deleteAppointment(appointment._id)}>
                                        < AiFillDelete size={22} />
                                    </button>
                                     {
                                        !appointment.paymentStatus.includes("unpaid")?<button>paid</button>:  <button title="payment" className="btn btn-ghost  " onClick={() => payment(appointment)}>
                                        <MdOutlinePayment size={22} />
                                    </button>
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

export default MyAppointment;