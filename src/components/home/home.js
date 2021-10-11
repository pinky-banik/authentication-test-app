import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Instrument from '../instruments/instument';
import image1 from '../../image/image1.0.jpg';
import image2 from '../../image/image2.jpg';
import image3 from '../../image/image3.jpg';

const Home = () => {
                
                const [instruments, setinstruments] = useState([]);
                const myhome=instruments.slice(1,5);
                // fetching data
                useEffect(() => {
                    fetch('../../music.json')
                        .then(res => res.json())
                        .then(data => setinstruments(data));
                }, []);
        return (
                <div className="music-container">
                    {/* ========carousel===========  */}
                    <div className="carousel-container">
                    <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Music Notes</h3>
                        <p>Musical training is a more potent instrument than any other, because rhythm and harmony find their way into the inward places of the soul.”
                        ― Plato, The Republic</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Music Notes</h3>
                        <p>“Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.”
                        ― Kahlil Gibran</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Music Notes</h3>
                        <p>Music gives a soul to the universe, wings to the mind, flight to the imagination
                        life to everything.”
                        ― Plato.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    </div>
                    {/* =======welcome quote====== */}
                    <h1 className="m-5 text-center fw-bolder ">Welcome to <span class="name">Music Notes</span></h1>
                    {/* =========mapping======= */}
                    <div className="instrument-container"> 
                            {
                                myhome.map(instrument=> <Instrument  key={instrument.key}
                                    instrument={instrument}
                                ></Instrument>  )
                            }
                        </div>         
                <div></div>
            </div>

    );
};

export default Home;