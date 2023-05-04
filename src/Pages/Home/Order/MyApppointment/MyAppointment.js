import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Rating from 'react-rating';
import { toast } from 'react-hot-toast';
import { BsCheckCircleFill } from 'react-icons/bs';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const { user, token } = useContext(AuthContext);

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
                toast.error(`${error?.message}`);
            })
    }, [user?.email]);

    const payment = (data) => {
        axios.post(`http://localhost:5000/api/v1/init`, {
            name: data.patientName,
            id: data._id,
            phone: data?.contactNumber,
            category: data?.specialist
        })
            .then(res => {
                window.location.replace(res.data.result);
            })
            .catch(error => {
                toast.error(`${error?.response?.data?.error}`);
            })
    }

    const rating = (ratingValue, id) => {
        const confirm = window.confirm("are you sure to give riveiw?")
        if (confirm) {
            axios.post(`http://localhost:5000/api/v1/appointment/${id}`, { ratingValue, id })
                .then(response => {
                    toast.success("Thanks for the review!");
                })
                .catch(error => {
                    toast.error(`${error?.response?.data?.error}`);
                })
        }
    }

    const deleteAppointment = (e) => {
        axios.delete(`http://localhost:5000/api/v1/appointment/${e}`, config)
            .then(response => {
                if (response.data.result.deletedCount) {
                    const filter = appointment.filter(item => item._id !== e);
                    setAppointment(filter)
                }
            })
            .catch(error => { })
    }

    return (
        <div>
            {
                (appointment.length) > 0
                    ?
                    <div>
                        <div>
                            <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                                <i>
                                    My Appointments_
                                </i>
                            </h3>
                        </div>
                        <div className='container mx-auto'>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th className='text-center'>Sl. No</th>
                                            <th className='text-center'>Doctor</th>
                                            <th>Specialist</th>
                                            <th>Chamber</th>
                                            <th>Visit Time</th>
                                            <th>Patient Name</th>
                                            <th className='text-center'>Ratings</th>
                                            <th className='text-center'>Payment</th>
                                            <th className='text-center'>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            appointment.map((appointment, index) => <tr key={appointment._id}>
                                                <th className='text-center'>
                                                    {
                                                        `${index + 1}` < 10
                                                            ?
                                                            `0${index + 1}`
                                                            :
                                                            `${index + 1}`
                                                    }
                                                </th>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={appointment.imgUrl} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">
                                                                {appointment.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-sm">
                                                        {appointment.specialist}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-sm">
                                                        {appointment.chamber}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-sm">
                                                        {appointment.visitTime}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-sm">
                                                        {appointment.patientName}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center items-center">
                                                        <Rating
                                                            emptySymbol="fa-regular fa-star "
                                                            fullSymbol="fa fa-star"
                                                            onChange={(e) => rating(e, appointment.doctorId)}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center items-center">
                                                        {
                                                            !appointment.paymentStatus.includes("unpaid")
                                                                ?
                                                                <p className='flex justify-center items-center italic text-[green] font-bold'>
                                                                    <BsCheckCircleFill className='mr-1' /><>Paid</>
                                                                </p>
                                                                :
                                                                <button title="payment" className="btn btn-ghost" onClick={() => payment(appointment)}>
                                                                    <MdOutlinePayment size={22} />
                                                                </button>
                                                        }
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center items-center text-[red]">
                                                        <button title="delete" className="btn btn-ghost" onClick={() => deleteAppointment(appointment._id)}>
                                                            < AiFillDelete size={22} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                            <i>
                                You Have No Appointments Yet_
                            </i>
                        </h3>
                    </div>
            }
        </div>
    );
};

export default MyAppointment;