import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import BloodCard from './BloodCard';

const Donate = () => {
    const [toggler, setToggler] = useState(true);
    const [bloodDonar, setBloodDonar] = useState([]);
    const [status, setStatus] = useState("");
    const [group, setGroup] = useState("");

    const { pathname } = useLocation();

    const bloodGroup = [
        'selected',
        'A+',
        'B+',
        'AB+',
        'O+',
        'A-',
        'B-',
        'AB-',
        'O-'
    ];

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

    const groupSearch = e => {
        setGroup(e.target.value);
    }

    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center overflow-auto  '>
                {
                    !pathname.includes('/dashboard/blood/donar')
                    &&
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-3' htmlFor='bloodRange'>
                            <h3 className='text-3xl text-center text-[#0E7490] font-bold mb-5'>
                                <i>
                                    Blood Group_
                                </i>
                            </h3>
                        </label>
                        <select id='bloodRange' onClick={groupSearch} className='h-10 bg-[#D3D3D3] text-xl text-center rounded-full border-[black]'>
                            {
                                bloodGroup.map((category, index) => (<option
                                    value={category}
                                    key={index}
                                >
                                    {category}
                                </option>))
                            }
                        </select>
                    </div>
                }
            </div>

            <div className='flex justify-center items-center overflow-auto p-10'>
                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Donar list</h5>
                        <button onClick={() => setToggler(!toggler)} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 bg-white border-none">
                            {
                                toggler
                                    ?
                                    'View All'
                                    :
                                    'See Less'
                            }
                        </button>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                toggler ?
                                    bloodDonar.slice(0, 5).map((donar, index) => <BloodCard
                                        key={index}
                                        donar={donar}
                                        setStatus={setStatus}
                                    />)
                                    :
                                    bloodDonar.map((donar, index) => <BloodCard
                                        key={index}
                                        donar={donar}
                                        setStatus={setStatus}
                                    />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;