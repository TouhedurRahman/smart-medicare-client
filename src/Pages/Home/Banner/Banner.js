import React from 'react';
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div>
            <div className='w-full h-10 bg-[red] text-white text-4xl font-bold flex justify-center items-center rounded'>
                <Marquee className='text-white text-xl font-bold' speed={60}>
                    <span className='text-xl text-[yellow] mr-1'>
                        *** "স্মার্ট মেডিকেয়ার" এ আপনাকে স্বাগতম - যেখানে আপনি পাচ্ছেন অভিজ্ঞ ডাক্তারের অ্যাপয়েন্টমেন্ট, অনলাইন ফার্মেসি সেবা, রক্তদান সেবা এবং এম্বুলেন্স সেবা।
                    </span>
                    <span className='text-xl text-[yellow]' style={{ marginRight: "1000px" }}>
                        "স্মার্ট মেডিকেয়ার" - আপনার স্বাস্থ্য সেবা প্রদানে সর্বদা প্রস্তুত। **
                    </span>
                </Marquee>
            </div>

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
                        <p className="py-6 pr-2 text-justify text-black">
                            Welcome to our one-stop healthcare platform where you can easily schedule appointments with doctors, purchase medication from our online pharmacy, find a blood donor, and quickly call an ambulance in case of emergencies. Our user-friendly website is designed to provide convenient and accessible healthcare services to everyone.
                        </p>
                        <label htmlFor="banner-modal" className="btn bg-gradient-to-r from-primary to-secondary text-white">Learn More</label >
                        <input type="checkbox" id="banner-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <label htmlFor="banner-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-2xl text-center text-[green] font-bold">স্মার্ট মেডিকেয়ার</h3>
                                <p className="py-4 text-justify">
                                    "স্মার্ট মেডিকেয়ার" এ আপনাকে স্বাগতম - যেখানে আমরা আপনার স্বাস্থ্য যত্ন নিয়ে তুলতে সমর্থ। ডাক্তারের অ্যাপয়েন্টমেন্ট, অনলাইন ফার্মেসি সেবা, রক্তদান সেবা এবং এম্বুলেন্স সেবা - আপনার সব সেবার জন্য আমরা একটি একত্র স্থান তৈরি করেছি। <br></br><br></br>
                                    আমাদের ওয়েবসাইটে অনলাইন ফার্মেসি সেবা পাওয়া যায়, যাতে আপনি আপনার পছন্দমত ঔষধ সহজেই অর্ডার করতে পারেন এবং সম্পূর্ণ হোম ডেলিভারি পেতে পারেন। আপনি সিঙ্গেল প্ল্যাটফর্ম থেকে সমস্ত স্বাস্থ্যসেবা উপভোগ করতে পারেন। <br></br> <br></br>
                                    আমাদের ওয়েবসাইট নিরাপদ এবং স্বচ্ছ পরিবেশে সেবা প্রদান করে। একবার লগ ইন করে পছন্দমত সেবাটি নিন। সমস্ত সেবা একই সাথে পাওয়া যায়, যা আপনার জীবনকে সহজ ও সুখী করবে। <br></br> <br></br>
                                </p>
                                <p className="text-center text-sm">
                                    <i>
                                        "স্মার্ট মেডিকেয়ার" - আপনার স্বাস্থ্য সেবা প্রদানে সর্বদা প্রস্তুত।
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;