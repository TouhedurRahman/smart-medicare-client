import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GrUploadOption } from 'react-icons/gr';
import { useLocation } from 'react-router';
import BloodCard from './BloodCard';

const Donate = () => {
    const bloodGroup = [
       'selected', 'A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'
    ];
    const { pathname } = useLocation()
    const [toggler, setToggler] = useState(true);
    const [bloodDonar, setBloodDonar] = useState([])
    const [status, setStatus] = useState("")
    const [group, setGroup] = useState("")
     
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
            .catch(error => {
                // setError(error.message)
            })
    }, [status, group])
    const groupSearch = e => {
       
        setGroup(e.target.value);
    }
    return (
        <div className='container mx-auto'>
             {!pathname.includes('/dashboard/blood/donar') && !pathname.includes('/donate/blood') && <h3 style={{textAlign:"left", margin:"12px 0px 12px 0px",borderBottom:"#0299f0fa 3px solid"}}>Blood</h3>}
            <div className='flex justify-center items-center overflow-auto  '>
           
            {!pathname.includes('/dashboard/blood/donar') &&    <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='bloodRange'>
                        Blood Group
                    </label>
                    <select id='bloodRange' onClick={groupSearch}>
                        {bloodGroup
                            .map((category,index) => (
                                <option value={category} key={index} >{category}</option>
                            ))}
                    </select>
                </div>}
            </div>
            <div className='flex justify-center items-center overflow-auto p-10'>
                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Donar list</h5>
                        <button onClick={() => setToggler(!toggler)} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 bg-white border-none">
                            {/* View all */}
                            {toggler?'View All':'See Less'}
                        </button>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                            {
                                toggler ? bloodDonar.slice(0, 5).map((donar, index) => <BloodCard key={index} donar={donar} setStatus={setStatus} />) : bloodDonar.map((donar, index) => <BloodCard key={index} donar={donar} setStatus={setStatus} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;