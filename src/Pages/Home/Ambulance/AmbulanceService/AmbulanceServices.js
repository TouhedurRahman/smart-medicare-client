import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import AmbulanceService from './AmbulanceService';
import { Link } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const AmbulanceServices = () => {
    const { pathname } = useLocation();
    const [ambulance, setAmbulance] = useState([]);
    useEffect(() => {
        fetch('./ambulance.json')
            .then(res => res.json())
            .then(data => {
                setAmbulance(data);
            })
    }, [])
    return (
        <div className='container mx-auto'>
            <h3 className='italic text-2xl text-[#0299f0fa] font-bold' style={{ textAlign: "left", margin: "12px 0px 12px 0px", borderBottom: "#0299f0fa 3px solid" }}>এ্যাম্বুলেন্স</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {
                    ambulance.map((item, index) => <AmbulanceService item={item} key={index}></AmbulanceService>)
                }
            </div>

            <div className='flex items-center justify-end'  >
                <div className='flex items-center justify-end'  >
                    {
                        pathname === '/'
                        &&
                        <Link to='/ambulance/show-up' className='text-center' >
                            <button className='flex items-center'>
                                <>SEE MORE </><BsArrowRightCircleFill />
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default AmbulanceServices;