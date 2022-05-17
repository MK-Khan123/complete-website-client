import React, { useEffect, useState } from 'react';
import './Services.css';
import titleLogo from '../../../images/support.gif';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = 'https://desolate-springs-76107.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            });

    }, []);

    return (
        <section className='container'>
            <h2 className='border-bottom mt-5 fw-bold'><img src={titleLogo} style={{ height: "72px", width: "96px" }} alt="" />OUR SERVICES</h2>
            <Row className="gy-4 mt-4">
                {
                    isLoading &&
                    <div className='d-flex justify-content-center align-items-center'>
                        <Spinner animation="border" variant="dark" />
                    </div>
                }
                {
                    services.map(service => {
                        const { serviceName, servicePrice, serviceImage, _id } = service;
                        return (
                            <Col sm={6} lg={4} key={_id}>
                                <Card className="card shadow photo-frame">
                                    <div className="card-image">
                                        <Card.Img src={serviceImage} variant="top" />
                                    </div>
                                    <Card.Body style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                                        <Card.Title className="fw-bold">{serviceName}</Card.Title>
                                        <h4>$ {servicePrice}</h4>
                                        <div className='d-flex mt-3'>
                                            <Link to={"/orderCheckout/" + _id} className="btn btn-success">Get service</Link>
                                            <Button className="btn btn-warning ms-2 fw-bold">Add To Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        </section>
    );
};

export default Services;