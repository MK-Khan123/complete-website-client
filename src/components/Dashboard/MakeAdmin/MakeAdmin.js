import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const adminEmail = {
            email: data.email
        };

        const url = 'https://desolate-springs-76107.herokuapp.com/addAdmin';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(adminEmail)
        })
            .then(res => console.log('server side response', res));
        alert("Admin added successfully!");
    };

    return (
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={9} style={{ marginLeft: "250px" }}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <Form.Label>
                            <h2 className='mb-3 border-bottom'>Add Email Address</h2>
                        </Form.Label>
                        <Form.Control name="email" type="email" ref={register({ required: true })} />
                        {errors.email && <div style={{ color: 'red', marginTop: '15px' }}>Email is required</div>}
                    </div>
                    <div className='text-end'>
                        <Button variant="success" type="submit">Add as an admin</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    );
};

export default MakeAdmin;