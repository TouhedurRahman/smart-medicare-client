import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ConfirmAppointment = () => {
    const [paidAppointments, setPaidAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/paidAppointment')
            .then(response => setPaidAppointments(response.data.result));
    }, []);

    return (
        <div className='m-5'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        Confirm Paid Appointments_
                    </i>
                </h3>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-center'>Sl. No.</th>
                                <th className='text-center'>Picture</th>
                                <th>Name</th>
                                <th>Specialist</th>
                                <th>Chamber</th>
                                <th>Visit Time</th>
                                <th>Patient Name</th>
                                <th>User Email</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                paidAppointments.map((paidAppointment, i) => <tr>
                                    <th className='text-center'>
                                        {
                                            `${i + 1}` < 10
                                                ?
                                                `0${i + 1}`
                                                :
                                                `${i + 1}`
                                        }
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={paidAppointment.imgUrl} alt='Doctor...' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{paidAppointment.name}</td>
                                    <td>{paidAppointment.specialist}</td>
                                    <td>{paidAppointment.chamber}</td>
                                    <td>{paidAppointment.visitTime}</td>
                                    <td>{paidAppointment.patientName}</td>
                                    <td>{paidAppointment.userEmail}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAppointment;