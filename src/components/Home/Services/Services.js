import React, { useEffect, useState } from 'react';
import './Services.css';
import titleLogo from '../../../images/support.gif';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <section className='container'>
            <h3 className='border-bottom pt-5'><img src={titleLogo} style={{ height: "70px", width: "6rem" }} alt="" />OUR SERVICES</h3>
            <div className="d-flex justify-content-center">
                <div className='row mt-5'>
                    {
                        services.map(service => {
                            const { serviceName, servicePrice, serviceDetails, serviceImage, _id } = service;
                            return (
                                <div key={_id} className='col-md-4 p-2 mb-2'>
                                    <div className="card shadow photo-frame" style={{ width: "80%" }}>
                                        <div className='cardImg'>
                                            <img src={serviceImage} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                        </div>
                                        <div className='photo-details'>
                                            <h4>Service Details</h4>
                                            <p className="pt-5">{serviceDetails}</p>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{serviceName}</h5>
                                        </div>
                                        <div className='d-flex justify-content-around pb-2'>
                                            <h4>$ {servicePrice}</h4>
                                            <Link to={"/orderCheckout/" + _id} className="btn btn-primary">Get service</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;