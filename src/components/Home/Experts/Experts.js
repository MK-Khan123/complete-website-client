import React from 'react';
import expert1 from '../../../images/expert1.jpg';
import expert2 from '../../../images/expert2.jpg';
import expert3 from '../../../images/expert3.jpg';
import expert4 from '../../../images/expert4.jpg';
import expert5 from '../../../images/expert5.jpg';
import expert6 from '../../../images/expert6.jpg';
import expertGif from '../../../images/expert.gif';
import { Container } from 'react-bootstrap';

const expertsData = [
    {
        id: '1',
        name: 'Jacob Martin',
        designation: 'Chief Technician',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert1
    },
    {
        id: '2',
        name: 'Steve Smith',
        designation: 'Brake Alignment Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert2
    },
    {
        id: '3',
        name: 'William Emerson',
        designation: 'Engine Diagnostic Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert3
    },
    {
        id: '4',
        name: 'Mark Wahlberg',
        designation: 'Wheel Alignment Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert4
    },
    {
        id: '5',
        name: 'Catherine Jones',
        designation: 'Wheel Alignment Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert5
    },
    {
        id: '6',
        name: 'Eleanor Stern',
        designation: 'Wheel Alignment Expert',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?',
        img: expert6
    }
];

const Experts = () => {
    return (
        <Container>
            <h2 className='border-bottom mt-5 fw-bold'>
                <img src={expertGif} style={{ height: "72px", width: "96px" }} alt="" />OUR EXPERTS
            </h2>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5'>
                    {
                        expertsData.map(expert => {
                            const { name, designation, details, img, id } = expert;
                            return (
                                <div key={id} className='col-md-4 p-2 mb-2'>
                                    <div className="card shadow" style={{ width: "100%" }}>
                                        <img src={img} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{name}</h4>
                                            <p className="card-text">{designation}</p>
                                            <p className="card-text">{details}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </Container>
    );
};

export default Experts;