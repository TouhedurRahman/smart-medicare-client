import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './DoctorAppointment.css'
import { useLoaderData } from 'react-router';
import axios from 'axios';
import ModalDoctor from './ModalDoctor';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const DoctorAppointment = () => {
    const { user } = useContext(AuthContext);

    const [selected, setSelected] = React.useState();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { result } = useLoaderData();

    const [data, setData] = useState({
        name: result.name,
        imgUrl: result.imgUrl,
        specialist: result.specialist,
        doctorId: result._id,
        visitTime: result.visitTime,
        chamber: result.chamber,
    })

    let date = (new Date(selected));
    date = date.setDate(date.getDate());
    const newDate = new Date(selected)

    const handleOnSubmit = e => {
        const newData = { ...data, userName: user?.name, userEmail: user?.email, date: selected }

        if (newDate.getDay() === 5) {
            setError("FRIDAY IS OUR OFF DAY!");
            return;
        }

        if ((new Date()).setDate(new Date().getDate() + 1) > date) {
            setError(" INVALID DATE PLEASE SELECTED NEXT 2 DAY!");
            return;
        }

        if ((new Date()).setDate(new Date().getDate() + 8) < date) {
            setError(" INVALID DATE PLEASE SELECTED WITH IN SEVEN DAYS");
            return;
        } else {
            axios.post("http://localhost:5000/api/v1/appointment", newData)
                .then(res => {
                    setSuccess("YOUR APPOINTMENT IS SUCCESSFUL! PLEASE PAY NOW.");
                })
                .catch(error => {
                    setError(error.message)
                })
        }
    }

    const handleErrorSuccess = e => {
        setError("")
        setSuccess("")
    }

    return (
        <div className='container mx-auto m-5 rounded-2xl'>
            <div>
                {
                    error
                    &&
                    <div className="alert alert-warning shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>Warning: {error}</span>
                        </div>
                    </div>
                }

                {
                    success
                    &&
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span> {success}</span>
                        </div>
                    </div>
                }
            </div>
            <div className="card  lg:card-side shadow-xl">
                <div className='ml-5 my-auto rounded-lg'>
                    <figure>
                        <img style={{height: '500px', width: '500px'}} src={result?.imgUrl} alt="Loading..." />
                    </figure>
                    <p className='text-xl text-[gray] font-bold text-center mt-3'>BMDC No. <span className='text-xl text-[black] font-bold text-center mt-3'>{result.bmdcNo}</span></p>
                </div>
                <div className="card-body">
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                        <div className="card my-auto">
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">{result.name}</h2>
                                <h2 className="text-xl font-bold">{result.qualification}</h2>
                                <div>
                                    <p className='text-xl text-[gray] font-bold mt-3'>Specialist</p>
                                    <p className='ml-5'>{result.specialist}</p>
                                    <p className='text-xl text-[gray] font-bold mt-3'>Experience</p>
                                    <p className='ml-5'>{result?.experience}</p>
                                    <p className='text-xl text-[gray] font-bold mt-3'>Chamber</p>
                                    <p className='ml-5'>{result?.chamber}</p>
                                    <p className='text-xl text-[gray] font-bold mt-3'>Visiting Time</p>
                                    <p className='ml-5'>{result?.visitTime}</p>
                                    <p className='text-xl text-[gray] font-bold mt-3'>Visiting Fee</p>
                                    <p className='ml-5'>৳ {result.fee}/-</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <ModalDoctor
                                        data={data}
                                        setData={setData}
                                        handleErrorSuccess={handleErrorSuccess}
                                        handleOnSubmit={handleOnSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto my-auto'>
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointment;