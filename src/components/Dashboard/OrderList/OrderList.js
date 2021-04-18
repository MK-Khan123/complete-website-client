import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'http://localhost:5000/orders?email=' + loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email]);

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <h2 className='mb-3 border-bottom'>My Order Summary</h2>
                <h5 className="text-center pt-3">Greetings {loggedInUser.displayName}!</h5>
                {
                    orders.length !== 0 &&
                    <table className="table table-dark table-striped mt-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => {
                                    const { serviceName, servicePrice, orderTime, email, status, _id } = order;
                                    return (
                                        <tr key={_id}>
                                            <th scope="row">{index + 1}</th>
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
                    </table>
                }
            </div>
        </div>
    );
};

export default OrderList;