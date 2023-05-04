import React from 'react';
import { Link } from 'react-router-dom';

const AmbulanceService = (props) => {
    const { service_name, description, _id, img } = props.item;

    return (
        <div>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Loading..." className="rounded-xl" style={{ height: "300px", width: "550px" }} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {service_name} </h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`ambulance/category/${_id}`}>
                            <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    আরো দেখুন
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmbulanceService;