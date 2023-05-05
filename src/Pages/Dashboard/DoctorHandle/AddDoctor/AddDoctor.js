import axios from 'axios';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';

const AddDoctor = () => {
    const times = ["6-9 am", "9-12 am", "12-3 pm", "3-6 pm", "6-9 pm", "9-11 pm",];

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
                toast.success("Doctor added successfully");
            })
            .catch(error => {
                toast.error(`${error?.response?.data?.error}`);
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
        e.preventDefault();
    }

    return (
        <div className='container mx-auto'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        Add Doctor_
                    </i>
                </h3>
            </div>
            <div className="form-control">
                <form className='bg-zinc-200 p-4 rounded-xl' onSubmit={handleOnSubmit}>
                    <label className="input-group">
                        <span className="w-40 font-bold">Name</span>
                        <input required type="text" ref={nameRef} placeholder="Enter name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Doctor Image</span>
                        <input required type="text" ref={imgRef} placeholder="Enter Doctor Image URL" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Qualification</span>
                        <input required type="text" ref={qualificationRef} placeholder="Enter Doctor Qualification" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Specialist</span>
                        <input required type="text" ref={specialistRef} placeholder="Enter Specialist" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Chamber</span>
                        <input required type="text" ref={chamberRef} placeholder="Enter Chamber" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Visit Time</span>
                        <select className="border-4   ... w-full h-12" ref={visitTimeRef}>
                            {
                                times.map((time, index) => (
                                    <option value={time} key={index}>{time}</option>
                                ))
                            }
                        </select>
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">BMDC NO</span>
                        <input required type="text" ref={bmdcRef} placeholder="Enter BMDC No" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Work Experience</span>
                        <input required type="text" ref={experienceRef} placeholder="Enter Working Experience" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold"  >Fee</span>
                        <input required type="number" ref={feeRef} placeholder="Enter Fee" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <div className='text-center m-5'> <button className='bg-[#0E7490]'> ADD DOCTOR</button></div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;