import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;

    return (
        <div className={`flex justify-center items-center text-white p-6 shadow-xl rounded-2xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="icons..." />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;