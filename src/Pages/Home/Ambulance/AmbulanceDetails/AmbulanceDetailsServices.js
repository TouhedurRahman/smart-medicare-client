import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../Ambulance.css'
import { AiFillCar } from 'react-icons/ai';
import { GiRotaryPhone } from 'react-icons/gi';
import { BiCategoryAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AmbulanceDetailsServices = () => {
    const { id } = useParams();
    const [locations, setLocations] = useState("");
    const [ambulance, setAmbulance] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/ambulance")
            .then(response => {
                if (id) {
                    let result;
                    result = response.data.result.filter((item) => item.category === id)
                    if (locations) {
                        result = result.filter(item => (item.location).toUpperCase().includes(locations.toUpperCase()))
                    }
                    setAmbulance(result)
                }
                else if (locations) {
                    const result = response?.data?.result?.filter(item => (item.location).toUpperCase().includes(locations.toUpperCase()))
                    setAmbulance(result)
                }
                else {
                    setAmbulance(response.data.result)
                }
            })
            .catch(err => { })
    }, [id, locations]);

    const handlerLocation = (e) => {
        setLocations(e.target.value)
    };

    const ambulancePay = data => {
        axios.post(`http://localhost:5000/api/v1/init`, {
            phone: data.contact,
            category: data?.category,
            name: data?.name,
            id: data?._id
        })
            .then(res => {
                window.location.replace(res.data.result);
            })
            .catch(error => { })
    }

    return (
        <div className='container mx-auto'>

            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input onChange={handlerLocation} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search location" required />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 py-10   justify-center align-center">
                {
                    ambulance.map((ambulanceData, index) => <div
                        className="card bg-base-100 shadow-xl"
                    >
                        <figure className="px-10 pt-10">
                            <img src={ambulanceData.img} alt="Shoes" className="rounded-xl shadow-xl" style={{ height: "200px", width: "250px" }} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{ambulanceData.location}</h2>
                            <div className='w-full mb-5'>
                                <div className='w-full flex justify-between items-center mb-2'>
                                    <p className='flex justify-start items-center'><AiFillCar className='mr-1' />{ambulanceData.ambulanceNumber}</p>
                                    <p className='flex justify-end items-center'>{ambulanceData.category === 'ac' ? 'AC' : "Non-AC"}<BiCategoryAlt className='ml-1' /></p>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p className='flex justify-center items-center bg-[#C2C2C2] rounded-full'>সার্ভিস চার্জ ৳ {ambulanceData.serviceCharge}/-</p>
                                    <p className='flex justify-end items-center'>{ambulanceData.contact}<GiRotaryPhone className='text-[green] ml-1' /></p>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <label htmlFor="ambulance-modal" onClick={() => setModal(ambulanceData)} className="btn bg-[#0E7490]">More Info.</label>
                                <a href={`tel:${ambulanceData.contact}`}>
                                    <button className="btn bg-[#0E7490]">Call</button>
                                </a>
                                <button className="btn bg-[#0E7490]" onClick={() => ambulancePay(ambulanceData)}>Payment</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <input type="checkbox" id="ambulance-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="ambulance-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{modal.location}</h3>
                    <div class='w-full mt-5 mb-5'>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head*/}
                                <thead>
                                    <tr>
                                        <th colSpan={2}>
                                            <div className='flex justify-center items-center text-center text-4xl'>
                                                <GiRotaryPhone className='text-[green] mr-3' />{modal.contact}
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Description</th>
                                        <td>{modal.description}</td>
                                    </tr>
                                    <tr>
                                        <th>Category</th>
                                        <td>{modal.category === 'ac' ? 'AC' : 'Non-AC'}</td>
                                    </tr>
                                    <tr>
                                        <th>Driver Name</th>
                                        <td>{modal.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Ambulance Number</th>
                                        <td>{modal.ambulanceNumber}</td>
                                    </tr>
                                    <tr>
                                        <th>Service Charge</th>
                                        <td>৳ {modal.serviceCharge}/-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex justify-center items-center text-center mt-5'>
                            <a href={`tel:${modal.contact}`}>
                                <button className="btn bg-[#0E7490] mr-10">Call</button>
                                <Link to='/user/feedback'>
                                    <button className="btn bg-[#0E7490] ml-10">Feedback</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmbulanceDetailsServices;