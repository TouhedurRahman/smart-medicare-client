import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillMedicineBox } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { GiMedicines } from 'react-icons/gi';

const ProductCart = () => {
    const { state, dispatch, user } = useContext(AuthContext);

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState(0);
    const [modal, setModal] = useState(false);

    const medicinePay = e => {
        axios.post(`http://localhost:5000/api/v1/medicine/init`, {
            phone: phone,
            category: modal?.name,
            city: city,
            name: name,
            price: price,
            id: modal?._id,
            email: user?.email
        })
            .then(res => {
                window.location.replace(res.data.result);
            })
            .catch(error => { })
    }

    return (
        <div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-5'>
                {
                    state?.cart.map((item, index) =>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg p-3" key={item._id}>
                            <img className="mx-auto rounded-lg" src={item.imgUrl} alt={item.name} style={{ width: "300px", height: "200px" }} />
                            <div className="px-3 py-4">
                                <div className="text-center text-center font-bold text-xl mb-2">{item.name}</div>
                                <div
                                    className='w-full flex justify-center items-center'
                                    style={{ height: "80px" }}

                                >
                                    <p
                                        className="text-gray-700 text-base text-center"
                                    >
                                        {item.description.slice(0, 75)}
                                    </p>
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-center mb-2'>
                                <p className='flex justify-end items-center font-bold'><BiCategoryAlt className='mr-1' />{item.category}</p>
                                <p className='flex justify-start items-center font-bold'>{item.brand.name}<GiMedicines className='ml-1' /></p>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='w-full flex justify-center text-center'>
                                    <p className='flex justify-center items-center font-bold bg-[#C2C2C2] rounded-full p-1 px-3'>প্রতি পাতা ৳ {item.price}/-</p>
                                </div>
                                <div>
                                    <div>
                                        <button
                                            className="btn bg-[#0E7490]"
                                            onClick={() => dispatch({ type: "REMOVE_TO_CART", payload: item })}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='my-1'>
                                <label
                                    htmlFor="medicine-modal"
                                    onClick={() => setModal(item)}
                                    className="w-full flex justify-center items-center btn  bg-[#0E7490]"
                                >
                                    <span className='mr-1'>Medicine Order</span><AiFillMedicineBox />
                                </label>
                            </div>
                        </div>
                    )
                }
            </div>
            <input type="checkbox" id="medicine-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="medicine-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="form-control">
                        <form className='mt-5'>
                            <input
                                type="tel"
                                placeholder='Phone Number'
                                onChange={(e) => setPhone(e.target.value)}
                                className="text-center rounded-xl"
                                required
                            />
                            <input
                                type="text" placeholder='Full Name'
                                onChange={(e) => setName(e.target.value)}
                                className="text-center rounded-xl"
                                required
                            />
                            <input
                                type="text"
                                placeholder='Current Address'
                                onChange={(e) => setCity(e.target.value)}
                                className="text-center rounded-xl"
                                required
                            />

                            <input
                                type="number"
                                placeholder='Enter Quantity'
                                min="1"
                                onChange={(e) => setPrice(e.target.value * modal?.price)}
                                className="text-center rounded-xl"
                                required
                            />
                        </form>
                    </div>
                    <div className='text-center text-lg mt-5'>
                        <h1>Total Price ৳ {!price ? modal?.price : price}/-</h1>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="medicine-modal" className="btn rounded-xl w-full" onClick={() => medicinePay()}>Medicine Order</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;