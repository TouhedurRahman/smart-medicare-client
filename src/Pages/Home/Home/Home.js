import AmbulanceServices from '../Ambulance/AmbulanceService/AmbulanceServices';
import Banner from '../Banner/Banner';
import DonarHome from '../Blood/DonarHome';
import DoctorCategory from '../Doctors/DoctorCategory/DoctorCategory';
import InfoCards from '../InfoCards/InfoCards';
import MedicineBrand from '../MedicineBrand/MedicineBrand';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <DoctorCategory />
            <MedicineBrand />
            <DonarHome />
            <AmbulanceServices />
        </div>
    );
};

export default Home;