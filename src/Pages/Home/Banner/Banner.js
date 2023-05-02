import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero"
            style={{
                // background: `url(${bg})`
                background: 'https://i.ibb.co/XkmTkrF/doctors.jpg'
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://i.ibb.co/XkmTkrF/doctors.jpg' className="rounded-lg lg:w-1/2 shadow-2xl" alt='Loding...' />
                <div>
                    <div>
                        <h5 className='text-5xl text-[#0E7490] font-bold'>
                            <i>
                                Smart MediCare_
                            </i>
                        </h5>
                    </div>
                    <p className="py-6 pr-2 text-justify">
                        Welcome to our one-stop healthcare platform where you can easily schedule appointments with doctors, purchase medication from our online pharmacy, find a blood donor, and quickly call an ambulance in case of emergencies. Our user-friendly website is designed to provide convenient and accessible healthcare services to everyone.
                    </p>
                    <label htmlFor="my-modal-3" className="btn bg-gradient-to-r from-primary to-secondary text-white">Know More</label >
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Welcome to Smart MediCare!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;