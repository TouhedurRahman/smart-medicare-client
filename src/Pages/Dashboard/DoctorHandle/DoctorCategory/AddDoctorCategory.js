import axios from 'axios';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';

const AddDoctorCategory = () => {
    const imgRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const subtitleRef = useRef();

    const handleOnSubmit = (e) => {
        axios.post('http://localhost:5000/api/v1/addDoctorCategory', {
            img: imgRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
            subtitle: subtitleRef.current.value
        })
            .then(res => {
                toast.success("Doctor Added successfully.")
            })
            .catch(error => {
                toast.error(`${error?.response?.data?.error}`);
            })
        descriptionRef.current.value = ""
        categoryRef.current.value = ""
        imgRef.current.value = ""
        subtitleRef.current.value = ""
        e.preventDefault()
    }

    return (
        <div className='container mx-auto'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        Add Doctor Category_
                    </i>
                </h3>
            </div>
            <div className="form-control">
                <form className='bg-zinc-200 p-3 rounded-xl' onSubmit={handleOnSubmit}>

                    <label className="input-group">
                        <span className="w-40 font-bold">Category Image </span>
                        <input required type="text" ref={imgRef} placeholder="Enter Doctor Category Image URL" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Category Name</span>
                        <input required type="text" ref={categoryRef} placeholder="Enter Doctor Category Name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Subtitle</span>
                        <input required type="text" ref={subtitleRef} placeholder="Enter Doctor Category Subtitle" className="border-4 border-indigo-500/100 ..." />
                    </label>

                    <label className="input-group">
                        <span className="w-40 font-bold">Description</span>
                        <input required type="text" ref={descriptionRef} placeholder="Enter Doctor Category Description" className="border-4 border-indigo-500/100 ..." />
                    </label>

                    <div className='text-center m-5'>
                        <button className='text-center p-4 bg-[#0E7490]'> ADD DOCTOR CATEGORY</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctorCategory;