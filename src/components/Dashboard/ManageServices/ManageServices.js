import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Row, Spinner, Table } from 'react-bootstrap';

const ManageServices = () => {
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

    const handleDeleteService = (id) => {
        const url = `https://desolate-springs-76107.herokuapp.com/deleteService/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result));
        alert("Service removed successfully! Please go to Home page to see the update.");
    };

    return (
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={10} className="p-5">
                <h2 className='mb-3 border-bottom'>Manage Services</h2>
                {/* A TABULAR DISPLAY OF SERVICES ALONG WITH THEIR RESPECTIVE DELETE BUTTON */}
                {
                    isLoading &&
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Spinner animation="border" variant="dark" />
                    </div>
                }
                {
                    !isLoading &&
                    <Table striped bordered hover className="mt-4">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Service Name</th>
                                <th>Details</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading &&
                                <div className='d-flex justify-content-center align-items-center mt-5'>
                                    <Spinner animation="border" variant="dark" />
                                </div>
                            }
                            {
                                services.map((service, index) => {
                                    const { serviceName, serviceDetails, servicePrice, _id } = service;
                                    return (
                                        <tr key={_id}>
                                            <td className='fw-bold'>{index + 1}</td>
                                            <td>{serviceName}</td>
                                            <td>{serviceDetails}</td>
                                            <td>$ {servicePrice}</td>
                                            <td><Button variant='success' size='sm' className='my-1'><FontAwesomeIcon icon={faEdit} /></Button> <Button onClick={() => handleDeleteService(_id)} variant='danger' size='sm' className='my-1'><FontAwesomeIcon icon={faTrashAlt} /></Button></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                }
            </Col>
        </Row>
    );
};

export default ManageServices;