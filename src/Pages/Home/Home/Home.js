import AmbulanceServices from '../Ambulance/AmbulanceService/AmbulanceServices';
import Banner from '../Banner/Banner';
import DonarHome from '../Blood/DonarHome';
import DoctorCategory from '../Doctors/DoctorCategory/DoctorCategory';
import MedicineBrand from '../MedicineBrand/MedicineBrand';

const Home = () => {
    return (
        <div>
            <Banner />
            <DoctorCategory />
            <MedicineBrand />
            <DonarHome />
            <AmbulanceServices />
        </div>
    );
};

export default Home;