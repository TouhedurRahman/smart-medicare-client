import React from 'react';
import clock from '../../../assets/clock.svg';
import marker from '../../../assets/marker.svg';
import phone from '../../../assets/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Office 10.00 am to 08.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-[#0E7490] to-secondary text-white'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Ashulia, Savar Dhaka, Bangladesh.',
            icon: marker,
            bgClass: 'bg-[#604A9F]'
        },
        {
            id: 3,
            name: 'Contact US',
            description: '+880 1839-432144 smartmedicare@gmail.com',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-[#0E7490] text-white'
        }
    ]

    return (
        <div className='grid mt-8 mb-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;