import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllOrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/allOrders';
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleStatus = (id, status) => {
        
        const updateStatus = { id, status };
        
        const url = `http://localhost:5000/updateStatus/${id}`;
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
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <h2 className='mb-3 border-bottom'>All Order List</h2>
                {/* A TABULAR DISPLAY OF All THE ORDERS */}
                <table className="table table-striped table-hover border mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Current Status</th>
                            <th scope="col">Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => {
                                const { name, email, orderTime, serviceName, servicePrice, status, _id } = order;
                                return (
                                    <tr key={_id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{new Date(orderTime).toDateString('dd/MM/yyyy')}</td>
                                        <td>{serviceName} - ${servicePrice}</td>
                                        <td>{status}</td>
                                        <td><button onClick={() => handleStatus(_id, 'pending')} className='btn btn-outline-danger btn-sm'>pending</button><button onClick={() => handleStatus(_id, 'onGoing')} className='btn btn-outline-secondary btn-sm'>onGoing</button><button onClick={() => handleStatus(_id, 'done')} className='btn btn-outline-success btn-sm'>done</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrderList;