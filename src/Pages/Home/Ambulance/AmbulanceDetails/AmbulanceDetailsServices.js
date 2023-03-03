import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import pic from '../../../../assets/ui-animation.gif'
import '../Ambulance.css'
import AmbulanceCard from './AmbulanceCard';
const AmbulanceDetailsServices = () => {
    const { id } = useParams();
   const [locations,setLocations] = useState("")
    const [ambulance, setAmbulance] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/ambulance")
            .then(response => {
             
                if (id) {
                   let result;
                     result = response.data.result.filter((item) => item.category === id)
                    if(locations){
                        result = result.filter(item => (item.location).toUpperCase().includes(locations.toUpperCase()))
                    }
                    setAmbulance(result)
                }
                else if(locations){
                    const result = response?.data?.result?.filter(item => (item.location).toUpperCase().includes(locations.toUpperCase()))
                    setAmbulance(result)
                }
                else {
                        setAmbulance(response.data.result)
                }

            })
            .catch(err => {

            })
    }, [id,locations])
    const handlerLocation = (e)=>{
       setLocations(e.target.value)
    }
   
    return (
        <div className='container mx-auto'>
          
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input onChange={handlerLocation} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search location" required/>
                </div>
              
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 py-10   justify-center align-center">
                {
                    ambulance.map((ambulanceData, index) => <AmbulanceCard ambulanceData={ambulanceData} key={index} />)
                }
            </div>
        </div>
    );
};

export default AmbulanceDetailsServices;