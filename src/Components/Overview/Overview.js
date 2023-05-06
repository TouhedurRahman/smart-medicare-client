import React from 'react';
import OurResources from '../OurResources/OurResources';
import TopAppointment from '../TopAppointment/TopAppointment';
import OverviewPaymentMethods from '../OverviewPaymentMethods/OverviewPaymentMethods';

const Overview = () => {
    return (
        <div>
            <OurResources />
            <TopAppointment />
            <OverviewPaymentMethods />
        </div>
    );
};

export default Overview;