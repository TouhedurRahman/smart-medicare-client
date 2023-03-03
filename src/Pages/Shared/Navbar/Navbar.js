import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
  const { token, user, state, logOut, userProfile } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);

  const menuItems = <React.Fragment>
    <li><Link to="/show/doctor">Doctor</Link></li>
    <li><Link to="/show/medicine">Medicine</Link></li>
    {user?.email && <li tabIndex={0}>
      <a className="justify-between ">
        Order
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
      </a>
      <ul className="p-2 z-50 bg-[#0e7490]">
        <li> <Link to="/doctor/myappointment/control">MyAppointment</Link> </li>
        <li> <Link to="/medicine/myappointment/control"> Medicine Order</Link> </li>
      </ul>
    </li>}
    <li tabIndex={0}>
      <a className="justify-between ">
        Emergency
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
      </a>
      <ul className="p-1 z-50 bg-[#0e7490]">
        <li><Link to="/donate/blood">Blood</Link></li>
        <li><Link to="/ambulance/show-up">Ambulance</Link></li>

      </ul>
    </li>

    <li><Link to="/user/feedback">Feedback</Link></li>
    {isAdmin && <li><Link to="/dashboard">Dashboard</Link></li>}
    <li tabIndex={0}>
      <a className="justify-between ">
        Extra
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
      </a>
      <ul className="p-1 z-50 bg-[#0e7490]">
        <li><Link to="/top/appointment">Top Appointment</Link></li>

      </ul>
    </li>
  </React.Fragment>

  return (
    <div className='bg-[#0e7490] '>
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
            {/* start of card  */}
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{state?.cart?.length}</span>
                  </div>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">{state?.cart?.length} Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <Link to="/show/cart">
                        <button className="btn btn-primary btn-block">View cart</button>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card  */}
            {user?.email ? <div className="dropdown dropdown-end  ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {
                    userProfile?.pic ? <img src={userProfile?.pic} alt="Loading" /> : <img src="https://placeimg.com/80/80/people" />
                  }
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="user/profile" className="justify-between">
                    Profile

                  </Link>
                </li>
                <li><a> <button onClick={logOut}>Logout</button></a></li>
              </ul>
            </div> : <li><Link to="/user/login">Login</Link></li>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;