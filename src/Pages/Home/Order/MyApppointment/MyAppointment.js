import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Marquee from "react-fast-marquee";
import moment from "moment";
import Rating from 'react-rating';
import { toast } from 'react-hot-toast';
import { MdOutlinePayment, MdPending } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        const confirm = window.confirm("are you sure to give riveiw?");
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
        const confirm = window.confirm("are you sure delete?");
        if (confirm) {
            axios.delete(`http://localhost:5000/api/v1/appointment/${e}`, config)
                .then(response => {
                    if (response.data.result.deletedCount) {
                        const filter = appointment.filter(item => item._id !== e);
                        setAppointment(filter)
                    }
                })
                .catch(error => { })
        }
    }

    const notAccessToDelete = () => {
        toast.error("Unable to delete! You're already appointed.");
    }

    return (
        <div>
            {
                (appointment.length) > 0
                    ?
                    <div>
                        <div className='w-full h-10 bg-[#6B0707] text-white text-4xl font-bold flex justify-center items-center rounded'>
                            <Marquee className='text-[white] text-xl font-bold' speed={60}>
                                <span className='text-xl mr-1'>
                                    *** ডাক্তারের অ্যাপয়েন্টমেন্ট নেওয়ার জন্য আপনাকে অবশ্যই পেমেন্ট সম্পন্ন করতে হবে, অন্যথায় অ্যাপয়েন্টমেন্ট গ্রহণ করা হবে না।
                                </span>
                                <span className='text-xl' style={{ marginRight: "1000px" }}>
                                    সুতরাং, অ্যাপয়েন্টমেন্ট নিতে অবশ্যই পেমেন্ট সম্পন্ন করুন এবং ভিউ অপশনে ক্লিক করে আপনার রিসিট-টি অবশ্যই প্রিন্ট করে নিন, ধন্যবাদ। **
                                </span>
                            </Marquee>
                        </div>
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
                                            <th>Date</th>
                                            <th>Visit Time</th>
                                            <th>Patient Name</th>
                                            <th className='text-center'>Ratings</th>
                                            <th className='text-center'>Payment</th>
                                            <th className='text-center'>Delete</th>
                                            <th className='text-center'>View</th>

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
                                                    <span>
                                                        {appointment.specialist}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        {appointment.chamber}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-sm">
                                                        {moment(appointment.date).format("MMMM DD, YYYY")}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-sm">
                                                        {appointment.visitTime}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
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
                                                            (appointment.paymentStatus) === 'paid'
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
                                                    {
                                                        (appointment.paymentStatus) === 'paid'
                                                            ?
                                                            <div className="flex justify-center items-center text-[black]">
                                                                <button title="delete" className="btn btn-ghost" onClick={() => notAccessToDelete()}>
                                                                    < FaTrashAlt size={22} />
                                                                </button>
                                                            </div>
                                                            :
                                                            <div className="flex justify-center items-center text-[red]">
                                                                <button title="delete" className="btn btn-ghost" onClick={() => deleteAppointment(appointment._id)}>
                                                                    < FaTrashAlt size={22} />
                                                                </button>
                                                            </div>
                                                    }

                                                </td>
                                                <td>
                                                    {
                                                        (appointment.paymentStatus) === 'paid'
                                                            ?
                                                            <div className="flex justify-center items-center text-[green]">
                                                                <Link
                                                                    to={`/dr/appointment/print/receipt/${appointment._id}`}
                                                                    className='text-[green]'
                                                                >
                                                                    <FaEye className='text-[green]' size={22} />
                                                                </Link>
                                                            </div>
                                                            :
                                                            <p className='flex justify-center items-center italic text-[red] font-bold'>
                                                                <MdPending className='mr-1' /><>Pending</>
                                                            </p>
                                                    }
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