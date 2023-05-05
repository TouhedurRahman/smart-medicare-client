import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddMedicine = () => {
    const [error, setError] = useState("");

    const nameRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const brandNameRef = useRef();
    const brandIdRef = useRef();

    const handleOnSubmit = (e) => {
        axios.post('http://localhost:5000/api/v1/medicine', {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
            imgUrl: imgRef.current.value,
            price: priceRef.current.value,
            brand: {
                name: brandNameRef.current.value,
                id: brandIdRef.current.value,
            }
        })
            .then(res => {
                toast.success("Medicine added successfully");
            })
            .catch(error => {
                toast.error(`${error?.response?.data?.error}`);
            })
        nameRef.current.value = ""
        categoryRef.current.value = ""
        descriptionRef.current.value = ""
        imgRef.current.value = ""
        priceRef.current.value = ""
        brandNameRef.current.value = ""
        brandIdRef.current.value = ""
        e.preventDefault()
    }

    return (
        <div className='container mx-auto'>
            {error && <h1>{error}</h1>}
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        Add Medicine_
                    </i>
                </h3>
            </div>
            <div className="form-control px-4">
                <form className='bg-zinc-200 p-4 rounded-xl' onSubmit={handleOnSubmit}>
                    <label className="input-group">
                        <span className="w-40 font-bold">Medicine Name</span>
                        <input required type="text" ref={nameRef} placeholder="Enter medicine name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Medicine Image</span>
                        <input required type="text" ref={imgRef} placeholder="Enter Medicine Image URL" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Description</span>
                        <input required type="text" ref={categoryRef} placeholder="Enter Medicine Description" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Medicine Brand</span>
                        <input required type="text" ref={descriptionRef} placeholder="Medicine Brand" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Medicine Price</span>
                        <input required type="number" ref={priceRef} placeholder="Enter Medicine price" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Medicine Brand</span>
                        <input required type="text" ref={brandNameRef} placeholder="Enter Medicine Brand Name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40 font-bold">Medicine Brand Id</span>
                        <input required type="text" ref={brandIdRef} placeholder="Enter Medicine Brand Id" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <div className='text-center m-5'>
                        <button className='bg-[#0E7490]'> ADD Medicine</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMedicine;