import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { Col, Row, Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'https://desolate-springs-76107.herokuapp.com/orders?email=' + loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email]);

    return (
        <Row>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={10} className="p-5">
                <h2 className='mb-3 border-bottom'>Orders</h2>
                <h5 className="text-center pt-3">Greetings {loggedInUser.displayName}!</h5>
                {
                    orders.length !== 0 &&
                    <Table striped variant='dark' className="mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Order Date</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => {
                                    const { serviceName, servicePrice, orderTime, email, status, _id } = order;
                                    return (
                                        <tr key={_id}>
                                            <td>{index + 1}</td>
                                            <td>{serviceName}</td>
                                            <td>$ {servicePrice}</td>
                                            <td>{new Date(orderTime).toDateString('dd/MM/yyyy')}</td>
                                            <td>{email}</td>
                                            <td>{status}</td>
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

export default OrderList;