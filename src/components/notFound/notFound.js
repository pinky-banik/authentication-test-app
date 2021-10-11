import React from 'react';
import './notFound.css';
import image from '../../image/error.jpg';

const notFound = () => {
    return (
        <div>
            <h1 className="mt-5 text-center pt-5">Page not found</h1>
            <img className="img-fluid" src={image} alt="" />
        </div>
    );
};

export default notFound;