import React from 'react';
import expert1 from '../../../images/expert1.jpg';
import expert2 from '../../../images/expert2.jpg';
import expert3 from '../../../images/expert3.jpg';
import expert4 from '../../../images/expert4.jpg';
import expertGif from '../../../images/expert.gif';

const expertsData = [
    {
        name: 'Jacob Martin',
        designation: 'Chief Technician',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert1
    },
    {
        name: 'Steve Smith',
        designation: 'Brake Alignment Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert2
    },
    {
        name: 'William Emerson',
        designation: 'Engine Diagnostic Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert3
    },
    {
        name: 'Mark Wahlberg',
        designation: 'Wheel Alignment Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert4
    }
];

const Experts = () => {
    return (
        <section className='container'>
            <h3 className='border-bottom pt-5'><img src={expertGif} style={{ height: "70px", width: "6rem" }} alt="" />OUR EXPERTS</h3>
            <div className="d-flex justify-content-center">
                <div className='row w-75 mt-5'>
                    {
                        expertsData.map(expert => {
                            const { name, designation, details, img } = expert;
                            return (
                                <div className='col-md-4 p-2 mb-2'>
                                    <div className="card shadow" style={{ width: "100%" }}>
                                        <img src={img} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{name}</h4>
                                            <p className="card-text">{designation}</p>
                                            <h5 className="card-text">{details}</h5>
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

export default Experts;