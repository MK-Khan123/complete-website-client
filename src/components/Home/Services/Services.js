import React from 'react';
import './Services.css';
import oilChange from '../../../images/oil-changing.jpg';
import brakeRepair from '../../../images/brake-repairing.jpg';
import engineDiagnose from '../../../images/engine-diagnostic.jpg';
import titleLogo from '../../../images/support.gif';
import { Link } from 'react-router-dom';

const serviceData = [
    {
        name: 'Oil Changing',
        price: '200',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptates!',
        img: oilChange
    },
    {
        name: 'Brake Repairing',
        price: '200',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptates!',
        img: brakeRepair
    },
    {
        name: 'Engine Diagnostic',
        price: '200',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptates!',
        img: engineDiagnose
    }
];

const Services = () => {
    return (
        <section className='container'>
            <h3 className='border-bottom pt-5'><img src={titleLogo} style={{ height: "70px", width: "6rem" }} alt="" />OUR SERVICES</h3>
            <div className="d-flex justify-content-center">
                <div className='row mt-5'>
                    {
                        serviceData.map(service => {
                            const { name, price, details, img } = service;
                            return (
                                <div className='col-md-4 mb-2'>
                                    <div className="card shadow photo-frame" style={{ width: "18rem" }}>
                                        <div className='cardImg'>
                                            <img src={img} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                        </div>
                                        <div className='photo-details'>
                                            <h4>Service Details</h4>
                                            <p className="pt-5">{details}</p>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                        </div>
                                        <div className='d-flex justify-content-around pb-2'>
                                            <h4>$ {price}</h4>
                                            <Link to="#" className="btn btn-primary">Get service</Link>
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