import React from 'react';
import { useLoaderData } from 'react-router';
import Marquee from "react-fast-marquee";
import moment from "moment";
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
            <div className='mx-auto' style={{ width: '700px' }}>
                <div>
                    <div>
                        <h3 className='text-xl text-center text-[#0E7490] font-bold mx-5 my-2'>
                            <i>
                                Smart MediCare_<br />
                                <span>
                                    "স্মার্ট মেডিকেয়ার" - আপনার স্বাস্থ্য সেবা প্রদানে সর্বদা প্রস্তুত।
                                </span>
                            </i>
                        </h3>
                    </div>
                    <hr></hr>
                    <div className="hero bg-[#D2E7F7] rounded-lg my-3" style={{ border: "1px solid #D2E7F7" }}>
                        <div className="w-full flex justify-between flex-row-reverse px-5 py-2">
                            <div className='flex justify-center items-center' style={{ width: '25%', height: '120px' }}>
                                <img
                                    src="https://i.ibb.co/nRV6HKM/doctor-cartoon.png"
                                    style={{ height: '100%' }}
                                    alt='Loading...'
                                />
                            </div>
                            <div style={{ width: '75%' }}>
                                <h1 className="text-2xl font-bold">{result.name}</h1>
                                <p className='text-xl font-bold'>
                                    Specialist on {result.specialist}
                                </p>
                                <p className='text-xs mt-3 font-bold'>
                                    Chamber: {result.chamber}
                                </p>
                                <p className='text-xs font-bold'>
                                    Appointed Date - {moment(result.date).format("MMMM DD, YYYY")}
                                </p>
                                <p className='text-xs font-bold'>
                                    Visiting Time: {result.visitTime}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full my-1" style={{ border: "1px solid #D2E7F7" }}>
                                <thead style={{ borderBottom: "1px solid #D2E7F7" }}>
                                    <tr className='text-xs'>
                                        <th className='text-left' style={{ padding: "0.5rem" }}>Patient's Name</th>
                                        <th className='text-center' style={{ padding: "0.5rem" }}>Age</th>
                                        <th className='text-right' style={{ padding: "0.5rem" }}>Mobile No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-sm font-bold'>
                                        <td className='text-left' style={{ padding: "0.5rem" }}>{result.patientName}</td>
                                        <td className='text-center' style={{ padding: "0.5rem" }}>
                                            {
                                                (result.patientAge) > 1
                                                    ?
                                                    `${result.patientAge} Years`
                                                    :
                                                    `${result.patientAge} Year`
                                            }
                                        </td>
                                        <td className='text-right' style={{ padding: "0.5rem" }}>
                                            +88{result.contactNumber.slice(0, 1)} {result.contactNumber.slice(1, 5)}-{result.contactNumber.slice(5)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex mt-5 mb-5' style={{ height: "444px" }}>
                        <div className='border border-right' style={{ width: '20%' }}>
                            <p className='mt-3 mb-2 text-center text-[gray] italic text-base font-bold'>
                                Chief Complaints With Duration
                            </p>
                            <div className='text-center w-3/5 mx-auto'>
                                <hr className='mx-auto'></hr>
                            </div>
                            <p className='mb-2 text-center text-[gray] italic text-base font-bold' style={{ marginTop: "188px" }}>
                                Required Tests
                            </p>
                            <div className='text-center w-3/5 mx-auto'>
                                <hr className='mx-auto'></hr>
                            </div>
                        </div>
                        <div style={{ width: '80%' }}>
                            <p className='m-5 text-[gray] font-bold  italic text-2xl'>
                                Rx.
                            </p>
                            <img
                                src="https://i.ibb.co/ryysCM8/paid-logo.png"
                                className="relative opacity-30"
                                style={{ width: '150px', height: '150px', marginTop: "-140px", marginLeft: "415px" }}
                                alt='Loading...'
                            />
                        </div>
                    </div>
                    <div className='w-full text-base mt-6 flex justify-between items-center'>
                        <div>
                            <p className='font-bold'>
                                Next Follow Up: ................ দিন/মাস পর দেখা করবেন।
                            </p>
                        </div>
                        <div className='text-center'>
                            < p className='font-bold'>
                                .........................................
                            </p>
                            < p className='font-bold'>
                                Doctor's Signature
                            </p>
                        </div>
                    </div>
                    <div className='bg-[#D2E7F7] px-5 py-2 rounded-lg' style={{ marginTop: "25px", border: "1px solid #D2E7F7" }}>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-bold italic'>
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
                    <div className='m-5 text-center'>
                        <button
                            onClick={() => window.print()}
                            className="bg-[#0E7490] hover:bg-[#D2E7F7] print:hidden text-xl text-[white] hover:text-[black] transition ease-in-out bt"
                        >
                            <div className='flex items-center'><span className='mr-1 text-lg font-bold'>Print</span>< AiFillPrinter /></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintAppointmentReceipt;