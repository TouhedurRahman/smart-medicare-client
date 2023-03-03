import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddMedicineBrand = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const brandTitleRef = useRef();
    const imgRef = useRef();
    const [error,setError] = useState("")
    const handleOnSubmit = (e) => {
        axios.post('http://localhost:5000/api/v1/medicinebrand', {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            brandTitle:brandTitleRef.current.value,
            imgRef : imgRef.current.value
        })
            .then(res => {
                toast.success(<h2>congrats you can successfully added brand  </h2>)
            })
            .catch(error => {
                // setError(error.response.data.error)
                toast.error(<h1>  {error?.response?.data?.error}</h1>);
                 
            })
        nameRef.current.value = ""
        brandTitleRef.current.value = ""
        descriptionRef.current.value = ""
        imgRef.current.value = ""
        e.preventDefault()
    }
    return (
        <div className='container mx-auto'>
            {error&& <h1>{error}</h1>}
        <h1 className='text-center text-3xl text-indigo-800 my-10 '>Add Medicine Brand</h1>
        <div className="form-control px-4">
            <form className='bg-zinc-200 p-4' onSubmit={handleOnSubmit}>
                <label className="input-group">
                    <span className="w-40">Brand Name</span>
                    <input required type="text" ref={nameRef} placeholder="Enter brand name"className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">Brand Image Url</span>
                    <input required type="text" ref={imgRef} placeholder="Enter img link"  className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">Brand Sub Title</span>
                    <input required type="text" ref={brandTitleRef} placeholder="Enter Specialist" className="border-4 border-indigo-500/100 ..." />
                </label> 
                <label className="input-group">
                    <span className="w-40">brand Description</span>
                    <input required type="text" ref={descriptionRef} placeholder="Enter qualification" className="border-4 border-indigo-500/100 ..." />
                </label>
              
               <div className='text-center'>
               <button> ADD MedicineBrand</button>
               </div>
            </form>
        </div>
    </div>
    );
};

export default AddMedicineBrand;