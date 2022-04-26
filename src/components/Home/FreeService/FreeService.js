import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import freeServiceImg from '../../../images/free-service.jpg';

const FreeService = () => {
    return (
        <section style={{ backgroundColor: "rgb(245, 245, 245)" }} >
            <Container>
                <Row className="pt-5 mt-5">
                    <Col md={7}>
                        <h3 style={{ borderBottom: '1px solid black' }}>Get A Free Service <span style={{ color: 'red' }}>Now!</span></h3>

                        <Form.Group className="mb-3 pt-3">
                            <Form.Control type="name" placeholder="Enter Name" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="number" placeholder="Phone" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Select>
                                <option defaultValue>Select your vehicle type</option>
                                <option value="1">SUV</option>
                                <option value="2">Sedan</option>
                                <option value="3">Coupe</option>
                                <option value="4">Station Wagon</option>
                                <option value="5">Hatchback</option>
                                <option value="6">Mini Van</option>
                                <option value="7">Pickup Truck</option>
                                <option value="8">Other</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="date" placeholder="Reservation Date" />
                        </Form.Group>

                        <Button variant='primary' type='submit' className="mb-3">Submit</Button>
                    </Col>
                    <Col md={5}>
                        <img className='img-fluid' src={freeServiceImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FreeService;