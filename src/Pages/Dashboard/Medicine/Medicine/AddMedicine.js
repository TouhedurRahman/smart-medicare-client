import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddMedicine = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const brandNameRef = useRef();
    const brandIdRef = useRef();
    const [error, setError] = useState("")
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
                toast.success(<h2>congrats you can successfully added medicine  </h2>)
            })
            .catch(error => {
                // setError(error.response.data.error)
                toast.error(<h1>  {error?.response?.data?.error}</h1>);
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
            <h1 className='text-center text-3xl text-indigo-800 my-10 '>Add Medicine  </h1>
            <div className="form-control px-4">
                <form className='bg-zinc-200 p-4' onSubmit={handleOnSubmit}>
                    <label className="input-group">
                        <span className="w-40">Medicine Name</span>
                        <input required type="text" ref={nameRef} placeholder="Enter medicine name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Medicine Image Url</span>
                        <input required type="text" ref={imgRef} placeholder="Enter img link" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">medicine category</span>
                        <input required type="text" ref={categoryRef} placeholder="Enter category" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">brand Description</span>
                        <input required type="text" ref={descriptionRef} placeholder="Enter qualification" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Medicine Price</span>
                        <input required type="number" ref={priceRef} placeholder="Enter price" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Medicine brand name</span>
                        <input required type="text" ref={brandNameRef} placeholder="Medicine brand name" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <label className="input-group">
                        <span className="w-40">Medicine brand id</span>
                        <input required type="text" ref={brandIdRef} placeholder="Medicine brand id" className="border-4 border-indigo-500/100 ..." />
                    </label>
                    <div className='text-center'>
                        <button> ADD Medicine</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMedicine;