import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddReview = () => {
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

        // const currentTime = new Date().getTime(); //This 4s delay is used so that the image gets uploaded on ImgBB and generates an URL which will be sent to MongoDB database after pressing 'Add Review'.
        // while (currentTime + 4000 >= new Date().getTime());
    };

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            designation: data.designation,
            review: data.review,
            reviewImage: imageURL
        };
        const url = 'https://desolate-springs-76107.herokuapp.com/addReview';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res));
        alert("Review added successfully! Please go to Home page to see the update.");
    };

    return (
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={10} className="p-5">
                <h2 className='mb-3 border-bottom'>Add your review here</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label><h5>Your name</h5></Form.Label>
                        <Form.Control name="name" type="text" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Your name is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Upload your image</h5></Form.Label>
                        <Form.Control name="reviewImage" onChange={handleImageUpload} type="file" ref={register({ required: true })} />
                        {errors.reviewImage && <span style={{ color: 'red' }}>Your image is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Designation</h5></Form.Label>
                        <Form.Control name="designation" type="text" ref={register({ required: true })} />
                        {errors.designation && <span style={{ color: 'red' }}>Your designation is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><h5>Your review</h5></Form.Label>
                        <Form.Control name="review" type="text" ref={register({ required: true })} />
                        {errors.review && <span style={{ color: 'red' }}>Your review is required</span>}
                    </Form.Group>

                    <Form.Group style={{ textAlign: "end", paddingBottom: "50px" }}>
                        <Button disabled={isDisabled} variant='success' type="submit">Add Review</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
};

export default AddReview;