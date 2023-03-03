import React from 'react';
import { useNavigate } from 'react-router';
 
import Donate from './Donate';

const BloodHome = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-center items-center overflow-auto p-10'>
                <h3 className='text-zinc-900'>  Are you ready to donate blood? </h3> 
                <button type="button" onClick={()=>navigate("/donate/blood/register")} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Register</button>
            </div>
            <Donate />
       
        </div>
    );
};

export default BloodHome;