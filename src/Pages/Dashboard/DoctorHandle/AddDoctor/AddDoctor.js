import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddDoctor = () => {
    const times = ["6-9 am", "9-12 am", "12-3 pm", "3-6 pm","6-9 pm","9-11 pm",]
    const nameRef = useRef();
    const imgRef = useRef();
    const qualificationRef = useRef();
    const specialistRef = useRef();
    const chamberRef = useRef();
    const bmdcRef = useRef();
    const experienceRef = useRef();
    const feeRef = useRef();
    const visitTimeRef = useRef()
    
    const handleOnSubmit = (e) => {
        axios.post('http://localhost:5000/api/v1/addDoctor', {
            name: nameRef.current.value,
            imgUrl: imgRef.current.value,
            qualification: qualificationRef.current.value,
            specialist: specialistRef.current.value,
            chamber: chamberRef.current.value,
            bmdcNo: bmdcRef.current.value,
            experience: experienceRef.current.value,
            fee: feeRef.current.value,
            visitTime: visitTimeRef.current.value
        })
            .then(res => {
                toast.success(<h2>congrats you can successfully added doctor  </h2>)
            })
            .catch(error => {
                // setError(error.response.data.error)
                toast.error(<h1>  {error?.response?.data?.error}</h1>);
            })
        nameRef.current.value = ""
        qualificationRef.current.value = ""
        specialistRef.current.value = ""
        chamberRef.current.value = ""
        bmdcRef.current.value = ""
        experienceRef.current.value = ""
        feeRef.current.value = ""
        imgRef.current.value = ""
        visitTimeRef.current.value = ""
        e.preventDefault()
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl text-indigo-800 my-10 '>Add Doctor</h1>
            <div className="form-control">
                <form className='bg-zinc-200 p-4' onSubmit={handleOnSubmit}>
                    <label className="input-group">
                        <span className="w-40">Name</span>
                        <input required type="text" ref={nameRef} placeholder="Enter name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Doctor Image Url</span>
                        <input required type="text" ref={imgRef} placeholder="Enter img link" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Qualification</span>
                        <input required type="text" ref={qualificationRef} placeholder="Enter qualification" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Specialist</span>
                        <input required type="text" ref={specialistRef} placeholder="Enter Specialist" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Chamber</span>
                        <input required type="text" ref={chamberRef} placeholder="Enter Chamber" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Visit Time</span>
                        <select className="border-4   ... w-full h-12" ref={visitTimeRef}>
                            {
                                times.map((time,index)=>(
                             <option value={time} key={index}>{time}</option>
                                ))
                                }
                        </select>
                    </label>
                    <label className="input-group">
                        <span className="w-40">BMDC NO</span>
                        <input required type="text" ref={bmdcRef} placeholder="Enter BMDC No" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Work Experience</span>
                        <input required type="text" ref={experienceRef} placeholder="Enter work experience" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40"  >Fee</span>
                        <input required type="number" ref={feeRef} placeholder="Enter Fee" className="border-4 border-indigo-500/100 ..." />
                    </label>
                   <div className='text-center'> <button> ADD DOCTOR</button></div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;