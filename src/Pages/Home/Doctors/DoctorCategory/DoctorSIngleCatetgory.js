import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorSIngleCatetgory = ({doctorCategory}) => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4'>
             {doctorCategory.map((item, index) => <Link to={`/doctors/category/${item?.category}`} key={index}> <div>
                 <div className="category-container w-full">
                     <img src={item?.img} alt="Avatar" className="category-image w-full" />
                     <div className="category-overlay">
                     </div>
                     <div className="category-text  ">
                         <img src={item?.img} alt="Avatar" />
                     </div>
                 </div>
                 <div className="cardFooter text-center my-10">
                     <h5 className='my-3'>{item?.subtitle}</h5>
                     <h1 className='my-3'>{item.category}</h1>
                     <p className='my-3'>Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.</p>
                 </div>
             </div>
             </Link>)}
             </div>
    );
};

export default DoctorSIngleCatetgory;