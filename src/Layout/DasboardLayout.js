import { Link, Outlet } from 'react-router-dom';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { GiDoctorFace } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';

const DasboardLayout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='btn btn-outline m-1 w-40'><Link to="/"> <AiFillHome /> Home</Link></li>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  btn-outline   m-1 w-40"> <GiDoctorFace /> Doctor <BsArrowDownCircleFill /> </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/dashboard/doctor/add/category"> Add Doctor Category</Link></li>
                                <li><Link to="/dashboard/adddoctor"> AddDoctor</Link></li>
                                <li><Link to="/dashboard/showdoctor"> Doctor Handle</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  btn-outline   m-1 w-40"> <GiDoctorFace />Medicine<BsArrowDownCircleFill /> </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/dashboard/addmedicinebrand">Add MedicineBrand</Link></li>
                                <li><Link to="/dashboard/medicinebrand"> Medicine brand</Link></li>
                                <li><Link to="/dashboard/medicine">medicine</Link></li>
                                <li><Link to="/dashboard/addmedicine"> Add Medicine  </Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  btn-outline   m-1 w-40"> <GiDoctorFace />Blood<BsArrowDownCircleFill /> </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/dashboard/blood/donar">Blood</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  btn-outline   m-1 w-40"> <GiDoctorFace />Ambulance<BsArrowDownCircleFill /> </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/dashboard/add/ambulance">Add Ambulance</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  btn-outline   m-1 w-40"> <GiDoctorFace />Medi Pay<BsArrowDownCircleFill /> </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/dashboard/medi/pay">Medicine payment</Link></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DasboardLayout;