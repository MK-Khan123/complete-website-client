import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState();
    const [isDisabled, setIsDisabled] = useState(true);

    const handleImageUpload = event => {
        setIsDisabled(true);
        const imageData = new FormData();
        imageData.set('key', '6a505607e7aa21f071b1c0ec3e817fdf');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res.data.data.display_url);
                setIsDisabled(false);
            })
            .catch(error => console.log(error));

        // const currentTime = new Date().getTime(); //This 4s delay is used so that the image gets uploaded on ImgBB and generates an URL which will be sent to MongoDB database after pressing 'Add Service'.
        // while (currentTime + 4000 >= new Date().getTime());
    };

    const onSubmit = data => {
        const serviceData = {
            serviceName: data.serviceName,
            serviceDetails: data.serviceDetails,
            servicePrice: data.servicePrice,
            serviceImage: imageURL
        };
        const url = 'https://desolate-springs-76107.herokuapp.com/addService';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res));
        alert("Service added successfully! Please go to Home page to see the update.");
    };

    return (
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={10} className="p-5">
                <h2 className='mb-3 border-bottom'>Add your services here</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Service Name</h5></Form.Label>
                        <Form.Control name="serviceName" type="text" ref={register({ required: true })} />
                        {errors.serviceName && <span style={{ color: 'red' }}>Service name is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Upload Service Image</h5></Form.Label>
                        <Form.Control name="serviceImage" onChange={handleImageUpload} type="file" ref={register({ required: true })} />
                        {errors.serviceImage && <span style={{ color: 'red' }}>Service image is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Service Details</h5></Form.Label>
                        <Form.Control name="serviceDetails" type="text" ref={register({ required: true })} />
                        {errors.serviceDetails && <span style={{ color: 'red' }}>Service details is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Service Price</h5></Form.Label>
                        <Form.Control name="servicePrice" type="number" ref={register({ required: true })} />
                        {errors.servicePrice && <span style={{ color: 'red' }}>Service price is required</span>}
                    </Form.Group>

                    <Form.Group style={{ textAlign: "end", paddingBottom: "50px" }}>
                        <Button disabled={isDisabled} variant='success' type="submit">Add Service</Button>
                    </Form.Group>

                </Form>
            </Col>
        </Row>
    );
};

export default AddService;