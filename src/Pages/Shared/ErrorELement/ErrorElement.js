import React from 'react';
import img from '../../../assets/pageNotFound.png'
const ErrorElement = () => {
    return (
      <div className='container mx-auto'>
        <div className='grid   place-items-center  '>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
           
        </div>
      </div>
        </div>
      </div>
    );
};

export default ErrorElement;