import React, { useEffect, useState } from 'react';
import './DoctorsCategory.css'
// import img from '../../../../assets/pageNotFound.png'
import { Link, useLocation } from 'react-router-dom';
import DoctorSIngleCatetgory from './DoctorSIngleCatetgory';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const DoctorCategory = () => {
    const  {pathname} =useLocation();
    const [doctorCategory, setDoctorCategory] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/doctorCategory")
            .then(res => res.json())
            .then(result => {
                
                setDoctorCategory(result.result)
            })
    }, [])
  
    return (
        <div className='container mx-auto'>
            {!pathname.includes('/doctors/category/control')&& <h3 style={{textAlign:"left", margin:"12px 0px 12px 0px",borderBottom:"#0299f0fa 3px solid"}}>Doctor Category</h3>}
          
            {
               pathname.includes('/doctors/category/control')? <DoctorSIngleCatetgory doctorCategory={doctorCategory}/>:  <DoctorSIngleCatetgory doctorCategory={doctorCategory.slice(0,4)}/>
            }      
             <div className='flex items-center justify-end'  >
             <div className='flex items-center justify-end'  >
           {pathname =='/' &&<Link to="/doctors/category/control" className='text-center' ><button className='flex items-center'>  <>SEE MORE </><BsArrowRightCircleFill/> </button> </Link>}
           </div>
            </div>
        </div>
    );
};

export default DoctorCategory;