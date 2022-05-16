import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { Col, Form, Row, Button } from 'react-bootstrap';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const OrderCheckout = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const url = `https://desolate-springs-76107.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);

    const { serviceName, servicePrice } = service;

    const onSubmit = data => {
        const orderData = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            orderTime: new Date(),
            serviceName: data.serviceName,
            servicePrice: data.servicePrice,
            status: 'pending'
        };

        const url = "https://desolate-springs-76107.herokuapp.com/addOrder";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        alert('Order placed successfully!');
    }

    return (
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={10} className="p-5">
                <h2 className='mb-3'>Checkout</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label><h5>Your Name</h5></Form.Label>
                        <Form.Control name="name" defaultValue={loggedInUser.displayName} type="text" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Your name is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Your email</h5></Form.Label>
                        <Form.Control name="email" defaultValue={loggedInUser.email} type="email" ref={register({ required: true })} />
                        {errors.email && <span style={{ color: 'red' }}>Your email is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Service Name</h5></Form.Label>
                        <Form.Control name="serviceName" defaultValue={serviceName} type="text" ref={register({ required: true })} />
                        {errors.serviceName && <span style={{ color: 'red' }}>Service name is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Service Price</h5></Form.Label>
                        <Form.Control name="servicePrice" defaultValue={servicePrice} type="number" ref={register({ required: true })} />
                        {errors.servicePrice && <span style={{ color: 'red' }}>Service price is required</span>}
                    </Form.Group>

                    <Form.Group style={{ textAlign: "end", paddingBottom: "50px" }}>
                        <Button variant='success' type="submit">Checkout</Button>
                    </Form.Group>
                </Form>

                <h6>Pay Now (you can book our service now by pressing the Checkout button and pay later!)</h6>

                <Form.Check type="radio" name="flexRadioDefault" label='Credit Card' id="flexRadioDefault1" />
                <Form.Check type="radio" name="flexRadioDefault" label='Debit Card' id="flexRadioDefault2" />

                <div className='p-3 border'>
                    <ProcessPayment />
                </div>

            </Col>
        </Row>
    );
};

export default OrderCheckout;