import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddMedicineBrand = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const brandTitleRef = useRef();
    const imgRef = useRef();
    const [error, setError] = useState("");

    const handleOnSubmit = (e) => {
        axios.post('http://localhost:5000/api/v1/medicinebrand', {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            brandTitle: brandTitleRef.current.value,
            imgRef: imgRef.current.value
        })
            .then(res => {
                toast.success("Medicine Brand added successfully.")
            })
            .catch(error => {
                toast.error(`${error?.response?.data?.error}`);

            })
        nameRef.current.value = ""
        brandTitleRef.current.value = ""
        descriptionRef.current.value = ""
        imgRef.current.value = ""
        e.preventDefault()
    }

    return (
        <div className='container mx-auto'>
            {error && <h1>{error}</h1>}
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        Add Medicine Brand_
                    </i>
                </h3>
            </div>
            <div className="form-control px-4">
                <form className='bg-zinc-200 p-4 rounded-xl' onSubmit={handleOnSubmit}>
                    <label className="input-group">
                        <span className="w-40 font-bold">Brand Name</span>
                        <input required type="text" ref={nameRef} placeholder="Enter brand name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Brand Image</span>
                        <input required type="text" ref={imgRef} placeholder="Enter Brand Image URL" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Subtitle</span>
                        <input required type="text" ref={brandTitleRef} placeholder="Enter Brand Subtitle" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Brand Description</span>
                        <input required type="text" ref={descriptionRef} placeholder="Enter Brand Description" className="border-4 border-indigo-500/100 ..." />
                    </label>

                    <div className='text-center m-5'>
                        <button className='bg-[#0E7490]'> ADD MedicineBrand</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMedicineBrand;