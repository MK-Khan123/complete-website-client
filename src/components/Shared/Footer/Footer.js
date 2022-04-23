import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logo.png';
import { faGlobe, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <section style={{ backgroundColor: "#171717" }}>
            <div className='row p-5 ms-3 text-center'>
                <div className="col-md-3 col-sm-12">
                    <div className="d-flex align-items-center">
                        <img width={100} className='d-block' src={logo} alt="" />
                        <h3 className='text-white mb-4'>City Wheels Auto Shop</h3>
                    </div>
                    <p className="text-secondary">Sector-11, Uttara - 1230, Dhaka, Bangladesh</p>
                    <div className="d-flex flex-column text-secondary">
                        <p><span className='text-info'><FontAwesomeIcon icon={faPhoneAlt} /></span> 123-456-789</p>
                        <p><span className='text-info'><FontAwesomeIcon icon={faEnvelope} /></span> contact@yourdomain.com</p>
                        <p><span className='text-info'><FontAwesomeIcon icon={faGlobe} /></span> www.yourdomain.com</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    <h5 className='text-white mb-4'>Discover</h5>
                    <div className="text-secondary">
                        <p>Home</p>
                        <p>About us</p>
                        <p>Portfolio</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    <h5 className='text-white mb-4'>About</h5>
                    <div className="text-secondary">
                        <p>Clients</p>
                        <p>Team</p>
                        <p>Career</p>
                        <p>Testimonials</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    <h5 className='text-white mb-4'>Help</h5>
                    <div className="text-secondary">
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Partners</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    <h5 className='text-white mb-4'>Follow Us</h5>
                    <div className='d-flex justify-content-center text-white'>
                        <p><span style={{color: '#3b5998'}}><FontAwesomeIcon size='lg' icon={faFacebook} /></span></p>
                        <p className='ms-4'><span style={{color: '#1DA1F2'}}><FontAwesomeIcon size='lg' icon={faTwitter} /></span></p>
                        <p className='ms-4'><span style={{color: 'white'}}><FontAwesomeIcon size='lg' icon={faInstagram} /></span></p>
                        <p className='ms-4'><span style={{color: '#BE0216'}}><FontAwesomeIcon size='lg' icon={faPinterest} /></span></p>
                    </div>
                </div>
            </div>
            <p className='text-white text-center m-0' style={{ borderTop: '1px solid gray' }}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </section>
    );
};

export default Footer;