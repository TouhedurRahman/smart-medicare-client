import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';

const Navbar = () => {
  const { user, state, logOut, userProfile } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);

  const menuItems = <React.Fragment>
    <li><Link to="/show/doctor">Doctor</Link></li>
    <li><Link to="/show/medicine">Medicine</Link></li>
    {
      user?.email
      &&
      <li tabIndex={0}>
        <Link className="justify-between">
          Order
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        </Link>
        <ul className="p-2 z-50 bg-[#0e7490] rounded-lg">
          <li>
            <Link to="/doctor/myappointment/control">My Appointment</Link>
          </li>
          <li>
            <Link to="/medicine/myappointment/control">My Medicine Order</Link>
          </li>
        </ul>
      </li>
    }
    <li tabIndex={0}>
      <Link className="justify-between ">
        Emergency
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
      </Link>
      <ul className="p-1 z-50 bg-[#0e7490] rounded-lg">
        <li><Link to="/donate/blood">Blood</Link></li>
        <li><Link to="/ambulance/show-up">Ambulance</Link></li>

      </ul>
    </li>

    <li>
      <Link to="/user/feedback">
        Feedback
      </Link>
    </li>

    {
      isAdmin
      &&
      <li>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </li>
    }

    <li>
      <Link to="/overview">
        Overview
      </Link>
    </li>
  </React.Fragment>

  return (
    <div className='bg-[#0e7490] text-white font-bold print:hidden'>
      <div className='container mx-auto static'>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-[#0e7490]">
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Smart MediCare</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
          <div className='navbar navbar-end'>
            {/* start of cart  */}
            <div>
              {
                user?.email
                &&
                <div className="flex-none mr-2">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{state?.cart?.length}</span>
                      </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-[#0E7490] shadow">
                      <div className="card-body text-center">
                        <span className="font-bold text-lg">{state?.cart?.length} Items</span>
                        {/* <span className="text-info">Subtotal: $999</span> */}
                        <div className="text-center py-5">
                          <Link to="/show/cart" className='text-white font-bold border border-[white] px-5 py-2 rounded-lg'>
                            View cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
            {
              user?.email
                ?
                <div className="dropdown dropdown-end  ">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      {
                        userProfile?.pic
                          ?
                          <img src={userProfile?.pic} alt="Loading..." />
                          :
                          <img src="https://i.ibb.co/6r3zmMg/user.jpg" alt='Loading...' />
                      }
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-[#0e7490] text-white font-bold rounded-box w-52">
                    <li>
                      <Link to="user/profile">
                        <FaUserCircle /><>Profile</>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={logOut}>
                        <MdOutlineLogout /><>Logout</>
                      </Link>
                    </li>
                  </ul>
                </div>
                :
                <li>
                  <Link to="/user/login" className='text-white font-bold'>
                    Login
                  </Link>
                </li>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;