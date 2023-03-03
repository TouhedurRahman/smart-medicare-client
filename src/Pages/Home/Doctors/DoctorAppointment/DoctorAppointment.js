import React, { useContext, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, setDate } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './DoctorAppointment.css'
import { useLoaderData } from 'react-router';
import axios from 'axios';
import ModalDoctor from './ModalDoctor';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const DoctorAppointment = () => {
    const [selected, setSelected] = React.useState();
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const { result } = useLoaderData();
    const {user,token} = useContext(AuthContext)
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    const [data, setData] = useState({
        name: result.name,
        imgUrl: result.imgUrl,
        specialist: result.specialist,
        doctorId:result._id,
        visitTime:result.visitTime,
        chamber:result.chamber
    })
    let date = (new Date(selected));
    date = date.setDate(date.getDate());
    const newDate = new Date(selected)

    const handleOnSubmit = e => {
         const newData = { ...data,userName:user?.name,userEmail:user?.email, date: selected  }
        if (newDate.getDay() == 5) {
            setError("FRIDAY IS OUR OFF DAY!")
            return;
        }
        if ((new Date()).setDate(new Date().getDate() + 1) > date) {
            setError(" INVALID DATE PLEASE SELECTED NEXT 2 DAY!")
            return;
        }
        if ((new Date()).setDate(new Date().getDate() + 8) < date) {
            setError(" INVALID DATE PLEASE SELECTED WITH IN SEVEN DAYS")
            return;
        } 
        else {
            axios.post("http://localhost:5000/api/v1/appointment",newData )
                .then(res => {
                    setSuccess("SUCCESSFYLLY YOU APPOINTMENT")
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
        <div className='container mx-auto'>
            <div>
                {error && <div className="alert alert-warning shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>Warning: {error}</span>
                    </div>
                </div>
                }{
                    success && <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span> {success}</span>
                        </div>
                    </div>
                }
            </div>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
                <div>
                    <figure><img className='w-full h-80' src={result?.imgUrl} alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                        <div className="card   ">
                            <div className="card-body">
                                <h2 className="card-title">{result.name}</h2>
                                <div>
                                    <p className='pb-0 p-0'>{result.qualification}</p>
                                    <p className='p-0 m-0'>{result.specialist}</p>
                                    <p>{result?.chamber}</p>
                                    <p>{result?.visitTime}</p>
                                    <p>{result.fee}BDT/-</p>
                                </div>
                                <div className="card-actions justify-end">
                                  {/* this is mae n */}
                                  <ModalDoctor data={data} setData={setData} handleErrorSuccess={handleErrorSuccess} handleOnSubmit={handleOnSubmit}/>
                                </div>
                            </div>
                        </div>
                        <div>
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