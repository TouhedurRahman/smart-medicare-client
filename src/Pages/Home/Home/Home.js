import axios from 'axios';
import React, { useState } from 'react';
import AmbulanceServices from '../Ambulance/AmbulanceService/AmbulanceServices';
import Banner from '../Banner/Banner';
import Donate from '../Blood/Donate';
import DoctorCategory from '../Doctors/DoctorCategory/DoctorCategory';
import MedicineBrand from '../MedicineBrand/MedicineBrand';
 
const Home = () => {
       return (
        <div>
             
            <Banner/>
            <DoctorCategory/>
            <MedicineBrand/>
            <Donate/>
            <AmbulanceServices/>
        </div>
    );
};

export default Home;