import React from 'react';
import { useLoaderData } from 'react-router';
import Marquee from "react-fast-marquee";
import { AiFillPrinter } from 'react-icons/ai';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { MdEmail } from 'react-icons/md';

const PrintAppointmentReceipt = () => {
    const { result } = useLoaderData();

    return (
        <div>
            <div className='w-full h-10 bg-[#6B0707] text-white text-4xl font-bold flex justify-center items-center rounded print:hidden'>
                <Marquee className='text-[white] text-xl font-bold' speed={60}>
                    <span className='text-xl mr-1'>
                        *** আপনি নিন্মোক্ত অ্যাপয়েন্টমেন্ট রিসিট-টি নিচে প্রিন্ট অপশনে গিয়ে ডাউনলোড করে প্রিন্ট করুন।
                    </span>
                    <span className='text-xl' style={{ marginRight: "1000px" }}>
                        ডাক্তার দেখানোর সময় অবশ্যই কপি-টি সাথে রাখবেন, ধন্যবাদ। ***
                    </span>
                </Marquee>
            </div>
            <div>
                <div style={{ height: "50px" }}></div>
                <div>
                    <h3 className='text-5xl text-center text-[#0E7490] font-bold m-5'>
                        <i>
                            Smart MediCare_
                            <span>
                                "স্মার্ট মেডিকেয়ার" - আপনার স্বাস্থ্য সেবা প্রদানে সর্বদা প্রস্তুত।
                            </span>
                        </i>
                    </h3>
                </div>
                <hr></hr>
                <div className="hero bg-[#D2E7F7] rounded-lg mt-5 mb-5">
                    <div className="w-full flex flex-col justify-between lg:flex-row-reverse mt-5 p-5">
                        <div className='flex justify-center items-center'>
                            <img
                                src="https://i.ibb.co/nRV6HKM/doctor-cartoon.png"
                                style={{ width: '170px', height: '150px' }}
                                alt='Loading...'
                            />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">{result.name}</h1>
                            <p className='text-2xl font-bold'>
                                Specialist on {result.specialist}
                            </p>
                            <p className='mt-5'>
                                Chamber: {result.chamber}
                            </p>
                            <p className=''>
                                Visiting Date: {result.date}
                            </p>
                            <p className=''>
                                Visiting Time: {result.visitTime}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='text-center'>Patient Name</th>
                                    <th className='text-center'>Mobile No.</th>
                                    <th className='text-center'>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='text-center'>{result.patientName}</th>
                                    <td className='text-center'>{result.contactNumber}</td>
                                    <td className='text-center'>{result.userEmail}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr></hr>
                <div className='flex mt-5 mb-5' style={{ height: "1100px" }}>
                    <div className='border border-right' style={{ width: '330px' }}>
                        <p className='mt-3 mb-2 text-center text-[gray] italic text-2xl font-bold'>
                            Chief Complaints With Duration
                        </p>
                        <div className='text-center w-1/2 mx-auto'>
                            <hr className='mx-auto'></hr>
                        </div>
                        <p className='mb-2 text-center text-[gray] italic text-2xl font-bold' style={{ marginTop: "550px" }}>
                            Required Tests
                        </p>
                        <div className='text-center w-1/2 mx-auto'>
                            <hr className='mx-auto'></hr>
                        </div>
                    </div>
                    <div>
                        <p className='m-5 text-[gray] font-bold  italic text-3xl'>
                            Rx.
                        </p>
                        <img
                            src="https://i.ibb.co/ryysCM8/paid-logo.png"
                            className="relative"
                            style={{ width: '150px', height: '150px', marginTop: "-160px", marginLeft: "970px" }}
                            alt='Loading...'
                        />
                    </div>
                </div>
                <div className='w-full text-2xl mt-5 flex justify-between items-center'>
                    <div>
                        <p className='font-bold'>
                            Next Follow Up: ..................... দিন/মাস পর দেখা করবেন।
                        </p>
                    </div>
                    <div className='text-center'>
                        < p className='font-bold'>
                            ...................................................
                        </p>
                        < p className='font-bold'>
                            Doctor's Signature
                        </p>
                    </div>
                </div>
                <div className='bg-[#D2E7F7] p-5 rounded-lg' style={{ marginTop: "80px" }}>
                    <div className='mt-5 flex justify-between items-center'>
                        <p className='text-3xl font-bold italic'>
                            Smart MediCare_
                        </p>
                        <p className='flex justify-between items-center font-bold'>
                            <TfiHeadphoneAlt className='mr-1' />+880 1839-432144
                        </p>
                        <p className='flex justify-between items-center font-bold'>
                            <MdEmail className='mr-1' />smartmedicare@gmail.com
                        </p>
                    </div>
                    <div className='text-center font-bold mt-3'>
                        <p>
                            "স্মার্ট মেডিকেয়ার" - আপনার স্বাস্থ্য সেবা প্রদানে সর্বদা প্রস্তুত।
                        </p>
                    </div>
                </div>
            </div>
            <div className='m-5 text-center'>
                <button
                    onClick={() => window.print()}
                    className="btn btn-outline bg-[#0E7490] hover:bg-[#D2E7F7] print:hidden text-xl text-[white] hover:text-[black]"
                >
                    <span className='mr-1 text-xl'>Print</span>< AiFillPrinter />
                </button>
            </div>
        </div>
    );
};

export default PrintAppointmentReceipt;