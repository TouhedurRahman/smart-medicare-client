import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FilterDoctor from './FilterDoctor';

const DoctorServices = () => {
    const [doctor, setDoctor] = useState([]);
    const [searchDoctor, setSearchDoctor] = useState('')
    // const location = useLocation();
    const [toggler, setToggler] = useState(true)
    let { id } = useParams();
    if (searchDoctor) {
        id = searchDoctor
    }
    if (!id) {
        id = ""
    }
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/doctor')
            .then(res => res.json())
            .then(data => {
                const filter = data.result.filter(item => item.specialist.toLowerCase().includes(id.toLowerCase()))
                if (!id) {
                    setDoctor(data.result);
                }
                else {
                    setToggler(true)
                    setDoctor(filter)
                }

            })
    }, [id]);
    return (
        <div>
            <div className='text-center container mx-auto'>
                <FilterDoctor setSearchDoctor={setSearchDoctor} />
                <div >
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4'>
                        {
                            doctor?.map(person =>
                                
                                <div className="bg-white rounded shadow-lg p-2 border   grid   justify-center align-center" key={person?._id}>
                                    <div className="flex items-center mb-2 justify-center">
                                        <img src={person?.imgUrl} alt={person?.name} className="w-52 h-52 rounded-full mr-6" />

                                    </div>
                                    <div className="px-6 py-2">
                                        <div className="font-bold text-xl mb-2">{person?.name}</div>
                                        <p className="text-gray-700 text-base mb-1">{person?.qualification}</p>
                                        <p className="text-gray-700 text-base mb-1">${person?.fee}</p>
                                        <p className="text-gray-700 text-base mb-1">{person?.specialist}</p>
                                        <Rating
                                          className='text-yellow-600'
                                                    emptySymbol="fa-regular fa-star "
                                                    fullSymbol="fa fa-star "
                                                    initialRating={person.rating}
                                                    readonly
                                                /> 
                                 
                                    </div>
                                    <div className="px-6 pt-2 pb-1">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                            {person?.visitTime}
                                        </span>
                                       
                                        <Link to={`/doctor/details/${person._id}`}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Book Appointment
                                        </button></Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorServices;