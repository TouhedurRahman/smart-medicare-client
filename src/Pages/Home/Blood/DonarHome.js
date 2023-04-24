import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import DonarHomeCard from './DonarHomeCard';

const DonarHome = () => {
    const { pathname } = useLocation();
    const [bloodDonar, setBloodDonar] = useState([])
    const [status, setStatus] = useState("");
    const [group, setGroup] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/blood`)
            .then(response => {
                const filter = response?.data?.result?.filter((bloodGroup) => bloodGroup.bloodGroup === group);
                if (group) {
                    setBloodDonar(filter);
                    setStatus("")
                }
                else {
                    setBloodDonar(response.data.result);
                    setStatus("")
                }
            })
            .catch(error => { })
    }, [status, group]);

    return (
        <div>
            <h3 className='italic text-2xl text-[#0299f0fa] font-bold' style={{ textAlign: "left", margin: "12px 0px 12px 0px", borderBottom: "#0299f0fa 3px solid" }}>Blood</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-4 py-10 justify-center align-center'>
                {
                    bloodDonar.slice(0, 4).map((donar, index) => <DonarHomeCard
                        key={index}
                        donar={donar}
                        setStatus={setStatus}
                    ></DonarHomeCard>)
                }
            </div>

            <div className='flex items-center justify-end'  >
                <div className='flex items-center justify-end'  >
                    {
                        pathname === '/'
                        &&
                        <Link to='/donate/blood' className='text-center' >
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

export default DonarHome;