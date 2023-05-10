import React from 'react';
import { useLoaderData } from 'react-router';

const PrintAppointmentReceipt = () => {
    const { result } = useLoaderData();

    return (
        <div>
            <h1>{result.name}</h1>
        </div>
    );
};

export default PrintAppointmentReceipt;