import React from 'react';
import expert1 from '../../../images/expert1.jpg';
import expert2 from '../../../images/expert2.jpg';
import expert3 from '../../../images/expert3.jpg';
import expert4 from '../../../images/expert4.jpg';
import expert5 from '../../../images/expert5.jpg';
import expert6 from '../../../images/expert6.jpg';
import expertGif from '../../../images/expert.gif';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

const expertsData = [
    {
        id: '1',
        name: 'Jacob Martin',
        designation: 'Chief Technician',
        img: expert1
    },
    {
        id: '2',
        name: 'Steve Smith',
        designation: 'Brake Alignment Expert',
        img: expert2
    },
    {
        id: '3',
        name: 'William Emerson',
        designation: 'Engine Diagnostic Expert',
        img: expert3
    },
    {
        id: '4',
        name: 'Mark Wahlberg',
        designation: 'Wheel Alignment Expert',
        img: expert4
    },
    {
        id: '5',
        name: 'Catherine Jones',
        designation: 'Wheel Alignment Expert',
        img: expert5
    },
    {
        id: '6',
        name: 'Eleanor Stern',
        designation: 'Wheel Alignment Expert',
        img: expert6
    }
];

const Experts = () => {
    return (
        <Container>
            <h2 className='border-bottom mt-5 fw-bold'>
                <img src={expertGif} style={{ height: "72px", width: "96px" }} alt="" />OUR EXPERTS
            </h2>
            <Row className='gy-4 mt-4'>
                {
                    expertsData.map(expert => {
                        const { name, designation, img, id } = expert;
                        return (
                            <Col sm={6} lg={4} key={id}>
                                <Card className="card shadow photo-frame">
                                    <div className="card-image">
                                        <Card.Img src={img} style={{ height: "250px" }} variant='top' />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-center">{name}</Card.Title>
                                        <Card.Text className="text-center">{designation}</Card.Text>
                                        <div className='d-flex justify-content-center'>
                                            <span style={{ color: '#3b5998' }}><FontAwesomeIcon size='lg' icon={faFacebook} /></span>
                                            <span className='ms-4' style={{ color: '#1DA1F2' }}><FontAwesomeIcon size='lg' icon={faTwitter} /></span>
                                            <span className='ms-4' style={{ color: 'black' }}><FontAwesomeIcon size='lg' icon={faInstagram} /></span>
                                            <span className='ms-4' style={{ color: '#BE0216' }}><FontAwesomeIcon size='lg' icon={faPinterest} /></span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
};

export default Experts;