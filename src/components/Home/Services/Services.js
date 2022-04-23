import React, { useEffect, useState } from 'react';
import './Services.css';
import titleLogo from '../../../images/support.gif';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'https://desolate-springs-76107.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <section className='container'>
            <h2 className='border-bottom mt-5 fw-bold'><img src={titleLogo} style={{ height: "72px", width: "96px" }} alt="" />OUR SERVICES</h2>
            <div className="row gy-4 mt-4">
                {
                    services.map(service => {
                        const { serviceName, servicePrice, serviceDetails, serviceImage, _id } = service;
                        return (
                            <div key={_id} className='col-sm-6 col-lg-4'>
                                <div className="card shadow photo-frame">
                                    <div className='card-image'>
                                        <img src={serviceImage} style={{ height: "250px", borderRadius: '10px' }} className="card-img-top" alt="..." />
                                    </div>
                                    <div className='photo-details'>
                                        <h4>Service Details</h4>
                                        <p className="pt-5">{serviceDetails}</p>
                                    </div>
                                    <div style={{ fontFamily: 'Roboto Condensed, sans-serif' }} className="card-body">
                                        <h4 className="card-title fw-bold">{serviceName}</h4>
                                        <h4>$ {servicePrice}</h4>
                                        <div className='d-flex mt-3'>                                            
                                            <Link to={"/orderCheckout/" + _id} className="btn btn-success">Get service</Link>
                                            <button className="btn btn-warning ms-2 fw-bold">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Services;