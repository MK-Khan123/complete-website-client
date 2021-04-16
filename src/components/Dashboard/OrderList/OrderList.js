import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <h2>Order List</h2>
            </div>
        </div>
    );
};

export default OrderList;