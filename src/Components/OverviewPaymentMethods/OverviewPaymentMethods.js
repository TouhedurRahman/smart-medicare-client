import React from 'react';
import Marquee from "react-fast-marquee";

const OverviewPaymentMethods = () => {
    const images = [
        'https://i.ibb.co/XCDkWfb/mastercard.jpg',
        'https://i.ibb.co/fXMC1fZ/visa.jpg',
        'https://i.ibb.co/Gv0yPwY/bkash.jpg',
        'https://i.ibb.co/t8yXxzs/rocket.png',
        'https://i.ibb.co/8sgn8cZ/download.png',
        'https://i.ibb.co/J3zh25H/upay.png',
        'https://i.ibb.co/6mBzMnG/tap.png',
        'https://i.ibb.co/QnYJTgb/ibbl.png',
        'https://i.ibb.co/xGS6KHq/Citybank.png',
        'https://i.ibb.co/HN7mKvD/celfin.png'
    ]
    return (
        <div className='m-5'>
            <div>
                <h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
                    <i>
                        Payment Methods_
                    </i>
                </h3>
            </div>
            <div className='mx-auto mb-5' style={{ width: '75%' }}>
                <Marquee className='mb-5 rounded-xl' speed={80} pauseOnHover={true} gradient={true} style={{ cursor: 'pointer' }}>
                    <div className="mr-5 rounded-xl">
                        <img src={images[0]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[1]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[2]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[3]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[4]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[5]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[6]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[7]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[8]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                    <div className="mr-5 rounded-xl">
                        <img src={images[9]} alt='Loading...' style={{ width: "100px", height: "70px" }} />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default OverviewPaymentMethods;