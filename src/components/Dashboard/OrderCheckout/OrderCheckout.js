import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderCheckout = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);

    const { serviceName, servicePrice, serviceDetails } = service;

    // const handleCheckout = () => {
    //     const orderData = {
    //         name: loggedInUser.displayName,
    //         email: loggedInUser.email,
    //         orderTime: new Date(),
    //         serviceName: serviceName,
    //         servicePrice: servicePrice,
    //         serviceDetails: serviceDetails
    //     };

    // const url = "http://localhost:5000/addOrder";
    //     fetch(url, {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify(orderData)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    //     alert('Order placed successfully! Please check Orders page');
    // }

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>

                <div>
                    <h2 style={{ paddingTop: '70px', paddingBottom: '20px' }}>Checkout</h2>
                    <div style={{ border: "1px solid lightgray", borderRadius: "10px" }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Details</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{serviceName}</td>
                                    <td>{serviceDetails}</td>
                                    <td>$ {servicePrice}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="table-secondary">
                                    <td><strong>Total</strong></td>
                                    <td></td>
                                    <td>$ {servicePrice}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div style={{ marginTop: '10px', textAlign: 'end' }}>
                        <button style={{ borderRadius: '7px' }} className='btn btn-success'>Checkout</button> {/*onClick={handleCheckout} */}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OrderCheckout;