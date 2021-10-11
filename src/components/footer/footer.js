import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

const Footer = () => {
    return (
        <div>
                <div className="site-footer">
                    {/* ==========footer container============== */}
                    <div className="container">
                        <footer>
                        <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">"Music Notes" courses about learning every musical instrument at a reasonable price. With these sites, you’ll have a great head start.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Service</h6>
                            <ul className="footer-links">
                            <li><a href="/service">Auscoustic Guiter</a></li>
                            <li><a href="/service">Electric Guiter</a></li>
                            <li><a href="/service">Okulele</a></li>
                            <li><a href="/service">Drum</a></li>
                            <li><a href="/service">Violin</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                            <li><a href="/home">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                        <a href="/home"> Pinky Banik</a>.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                            <li><a className="facebook" href="#home"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="twitter" href="#facebook"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="dribbble" href="#dribble"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a className="linkedin" href="#linkedin"><FontAwesomeIcon icon={faDribbble} /></a></li>   
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </footer>
                </div>
                </div>
        </div>
    );
};

export default Footer;