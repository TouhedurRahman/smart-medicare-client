import axios from 'axios';
import React, { useRef, useState } from 'react';
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
            subtitle:subtitleRef.current.value     
           })
            .then(res => {
                toast.success(<h2>congrats you can successfully added doctor category</h2>)
            })
            .catch(error => {
                toast.error(<h1>  {error?.response?.data?.error}</h1>);
            })
        
        descriptionRef.current.value = ""
        categoryRef.current.value = ""
        imgRef.current.value =""
        subtitleRef.current.value = ""
        e.preventDefault()
    }
    return (
        <div className='container mx-auto'>
        <h1 className='text-center text-3xl text-indigo-800 my-10 '>Add  Doctor Category</h1>
        <div className="form-control">
            <form className='bg-zinc-200 p-3' onSubmit={handleOnSubmit}>
               
                <label className="input-group">
                    <span className="w-40">Doctor Image </span>
                    <input required type="text" ref={imgRef} placeholder="Enter img link" className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">category</span>
                    <input required type="text"  ref={categoryRef} placeholder="Enter category" className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">subtitle</span>
                    <input required type="text" ref={subtitleRef}  placeholder="Enter category" className="border-4 border-indigo-500/100 ..." />
                </label>
               
                <label className="input-group">
                    <span className="w-40">description</span>
                    <input required type="text" ref={descriptionRef} placeholder="Enter description" className="border-4 border-indigo-500/100 ..." />
                </label>
                
               <div className='text-center'>
                 
               <button className='text-center p-4'> ADD DOCTOR CATEGORY</button>
               </div>
            </form>
        </div>
    </div>
    );
};

export default AddDoctorCategory;