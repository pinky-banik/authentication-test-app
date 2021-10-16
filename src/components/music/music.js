import React, { useEffect, useState } from 'react';
import Instrument from "../instruments/instument";
import "./music.css";
const Music = () => {
    const [instruments, setinstruments] = useState([]);
    // fetching data
    useEffect(() => {
        fetch('../../music.json')
            .then(res => res.json())
            .then(data => setinstruments(data));
    }, []);
    return (
        <div className="music-container">
            <h1 className="text-center fw-bolder">Music Notes 4y4rygigit Services</h1>
            <div className="instrument-container"> 
                {
                    instruments.map(instrument=> <Instrument  key={instrument.key}
                        instrument={instrument}
                    ></Instrument>  )
                }
            </div>
        </div>

    );
};

export default Music;