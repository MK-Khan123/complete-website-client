import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Spinner, Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AllOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = 'https://desolate-springs-76107.herokuapp.com/allOrders';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            });
    }, []);

    const handleStatus = (id, status) => {

        const updateStatus = { id, status };

        const url = `https://desolate-springs-76107.herokuapp.com/updateStatus/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(result => console.log(result));
        alert("Status updated successfully!");
    }

    return (
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={10} className="p-5">
                <h2 className='mb-3 border-bottom'>All Order List</h2>
                {/* A TABULAR DISPLAY OF All THE ORDERS */}
                {
                    isLoading &&
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Spinner animation="border" variant="dark" />
                    </div>
                }
                {
                    !isLoading &&
                    <Table striped hover bordered className="mt-5">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Order Date</th>
                                <th>Service Name</th>
                                <th>Current Status</th>
                                <th>Change Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => {
                                    const { name, email, orderTime, serviceName, servicePrice, status, _id } = order;
                                    return (
                                        <tr key={_id}>
                                            <td>{index + 1}</td>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{new Date(orderTime).toDateString('dd/MM/yyyy')}</td>
                                            <td>{serviceName} - ${servicePrice}</td>
                                            <td>{status}</td>
                                            <td><Button onClick={() => handleStatus(_id, 'pending')} variant="outline-danger" size="sm">pending</Button><Button onClick={() => handleStatus(_id, 'onGoing')} variant='outline-secondary' size='sm'>onGoing</Button><Button onClick={() => handleStatus(_id, 'done')} variant='outline-success' size='sm'>done</Button></td>
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

export default AllOrderList;