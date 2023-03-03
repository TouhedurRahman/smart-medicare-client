import React from 'react';
import { Link } from 'react-router-dom';

const MedicineCategory = ({ brand }) => {
    
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-4 py-10   justify-center align-center'>
                {brand.map((item, index) => <Link to={`/medicinebrand/brand/${item._id}`} key={index}>
                    <div className=" rounded overflow-hidden shadow-lg">
                        <img className="w-full border" src={item.imgRef} alt={brand.name} />
                         
                       
                        <div className="px-6 py-4 text-center">
                            {/* <div className="font-bold text-xl mb-2">{item.name}</div> */}
                            <h1 className='my-3'>{item.brandTitle}</h1>
                            <h1 className='my-3 font-bold text-xl mb-2'>{item.name}</h1>
                            <p className="text-gray-700 text-base">{item.description}</p>
                        </div>
                    </div>
                </Link>)}
            </div>
        </div>
    );
};

export default MedicineCategory;