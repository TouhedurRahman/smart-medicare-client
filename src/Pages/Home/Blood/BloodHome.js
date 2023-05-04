import React from 'react';
import { useNavigate } from 'react-router';
import Marquee from "react-fast-marquee";
import Donate from './Donate';

const BloodHome = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-full h-10 bg-[#3E0404] text-white text-4xl font-bold flex justify-center items-center rounded'>
                <Marquee className='text-white text-xl font-bold'>
                    <span className='text-xl mr-1'>
                        *** আপনি যদি স্বেচ্ছায় রক্তদান করতে প্রস্তুত থাকুন তাহলে এখনি রেজিষ্ট্রেশন করুন, এবং আপনি ইতিমদ্ধ্যে রক্তদান সম্পন্ন করলে আমাদের এডমিন প্যানেল এ জানিয়ে দিবেন।
                    </span>
                    <span className='text-xl' style={{ marginRight: "1000px" }}>
                        রক্ত প্রয়োজন হলে ডোনার এর সাথে যোগাযোগ করুন এবং কোনো সমস্যা হলে আমাদের সাথে যোগাযোগ করুন। ***
                    </span>
                </Marquee>
            </div>
            <div>
                <div className='flex justify-center items-center overflow-auto p-10'>
                    <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                        <i>
                            Are you ready for donate blood_
                        </i>
                    </h3>
                    <button type="button" onClick={() => navigate("/donate/blood/register")} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Register</button>
                </div>
                <Donate />

            </div>
        </div>
    );
};

export default BloodHome;