import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section style={{ backgroundColor: "#171717" }}>
            <div style={{ textAlign: "center" }} className='row p-5 ms-3'>
                <div className="col-md-2">
                    <h3 className='text-white mb-4'>City Wheels Auto Shop</h3>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. In explicabo optio corporis, adipisci fugiat vel!</p>
                </div>
                <div className="col-md-2">
                    <h5 className='text-white mb-4'>Discover</h5>
                    <div className="text-secondary">
                        <p>Home</p>
                        <p>About us</p>
                        <p>Portfolio</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h5 className='text-white mb-4'>About</h5>
                    <div className="text-secondary">
                        <p>Clients</p>
                        <p>Team</p>
                        <p>Career</p>
                        <p>Testimonials</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h5 className='text-white mb-4'>Help</h5>
                    <div className="text-secondary">
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Partners</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h5 className='text-white mb-4'>Follow Us</h5>
                    <div className='d-flex justify-content-around text-white'>
                        <p><FontAwesomeIcon icon={faFacebookF} /></p>
                        <p><FontAwesomeIcon icon={faTwitter} /></p>
                        <p><FontAwesomeIcon icon={faInstagram} /></p>
                        <p><FontAwesomeIcon icon={faPinterest} /></p>
                    </div>
                </div>
            </div>
            <p className='text-white text-center' style={{borderTop: '1px solid gray'}}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </section>
    );
};

export default Footer;