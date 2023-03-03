import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch("./banner.json")
            .then(res => res.json())
            .then(result => {
                setBanner(result)
            })
    }, [])
    return (
        <div>
            <div className="carousel w-full  ">
                {
                    banner.map((item, index) => <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                        <img src={item.img} className="w-full h-80" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${Number(index - 1)}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${index + 1}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Banner;