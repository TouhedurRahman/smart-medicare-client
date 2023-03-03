import React, { useEffect, useState } from 'react';
 
import { useLoaderData, useParams } from 'react-router';
import AmbulanceService from './AmbulanceService';

const AmbulanceServices = () => {
    const [ambulance,setAmbulance] = useState([]);
    useEffect(()=>{
        fetch('./ambulance.json')
        .then(res=>res.json())
        .then(data=>{
            setAmbulance(data);
        })
    },[])
    return (
        <div className='container mx-auto'>
            <h3 style={{textAlign:"left", margin:"12px 0px 12px 0px",borderBottom:"#0299f0fa 3px solid"}}>এ্যাম্বুলেন্স</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {
                    ambulance.map((item,index)=><AmbulanceService item={item} key={index}></AmbulanceService>)
               }
            </div>
        </div>
    );
};

export default AmbulanceServices;