import React from 'react';
import {useParams} from 'react-router';
const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div className="pt-5 text-center">
            <h1>THis is booking:{serviceId}</h1>
            <h2>hwefkjfwhefjw
            </h2>
        </div>
    );
};

export default Booking;