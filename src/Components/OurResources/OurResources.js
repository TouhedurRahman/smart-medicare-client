import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const OurResources = () => {
    const [doctors, setDoctors] = useState([]);
    const [medicines, setMedicines] = useState([]);
    const [bloodDonars, setBloodDonars] = useState([]);
    const [ambulances, setAbulances] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/doctor')
            .then(response => setDoctors(response.data.result));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/medicine')
            .then(response => setMedicines(response.data.result.totalProduct));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/blood')
            .then(response => setBloodDonars(response.data.result));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/ambulance')
            .then(response => setAbulances(response.data.result));
    }, []);

    return (
        <div>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        We Have_
                    </i>
                </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-4 pb-10 justify-center align-center'>
                <div className="card shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/XkmTkrF/doctors.jpg" alt="Doctors..." /></figure>
                    <div className="card-body grid justify-center content-center">
                        <h2 className="font-bold text-center" style={{ fontSize: "100px" }}>
                            <CountUp
                                end={doctors.length}
                                duration={3}
                                separator=","
                                className="font-bold text-center"
                                style={{ fontSize: "100px" }}
                            />
                        </h2>
                        <p className='text-4xl font-bold text-center'>Doctors</p>
                    </div>
                </div>
                <div className="card shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/18HD1pv/medicines.jpg" alt="Medicines..." /></figure>
                    <div className="card-body grid justify-center content-center">
                        <h2 className="font-bold text-center" style={{ fontSize: "100px" }}>
                            <CountUp
                                end={medicines}
                                duration={3}
                                separator=","
                                className="font-bold text-center"
                                style={{ fontSize: "100px" }}
                            />
                        </h2>
                        <p className='text-4xl font-bold text-center'>Medicines</p>
                    </div>
                </div>
                <div className="card shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/5xbkmjX/blood-donation.jpg" alt="Blood Donars..." /></figure>
                    <div className="card-body grid justify-center content-center">
                        <h2 className="font-bold text-center" style={{ fontSize: "100px" }}>
                            <CountUp
                                end={bloodDonars.length}
                                duration={3}
                                separator=","
                                className="font-bold text-center"
                                style={{ fontSize: "100px" }}
                            />
                        </h2>
                        <p className='text-4xl font-bold text-center'>Blood Donors</p>
                    </div>
                </div>
                <div className="card shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/r22NMnv/ambulance-hospital.webp" alt="Ambulances..." /></figure>
                    <div className="card-body grid justify-center content-center">
                        <h2 className="font-bold text-center" style={{ fontSize: "100px" }}>
                            <CountUp
                                end={ambulances.length}
                                duration={3}
                                separator=","
                                className="font-bold text-center"
                                style={{ fontSize: "100px" }}
                            />
                        </h2>
                        <p className='text-4xl font-bold text-center'>Ambulances</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurResources;