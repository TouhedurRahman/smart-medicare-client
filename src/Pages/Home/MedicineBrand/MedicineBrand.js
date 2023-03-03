import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import MedicineCategory from './MedicineCategory';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const MedicineBrand = () => {
    const location = useLocation();
   
    const [brand,setBrand] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/v1/medicinebrand")
        .then(response=>{
          
            setBrand(response?.data?.result)
        })
    },[])
  
    return (
        <div className='container mx-auto' >
           {!location?.pathname.includes('/medicinebrand/brand') && <h3 style={{textAlign:"left", margin:"12px 0px 12px 0px",borderBottom:"#0299f0fa 3px solid"}}>Medicine Brand</h3>}
            {location?.pathname.includes('/medicinebrand/brand') ?<MedicineCategory brand={brand}/>:<MedicineCategory brand={brand.slice(0,4)}/>}

           <div className='flex items-center justify-end'  >
           {location?.pathname =='/' &&<Link to="/medicinebrand/brand" className='text-center' ><button className='flex items-center'>  <>SEE MORE </><BsArrowRightCircleFill/> </button> </Link>}
           </div>
        </div>
    );
};

export default MedicineBrand;