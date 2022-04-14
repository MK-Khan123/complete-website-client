import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const OrderCheckout = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const url = `https://desolate-springs-76107.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);

    const { serviceName, servicePrice } = service;

    const onSubmit = data => {
        const orderData = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            orderTime: new Date(),
            serviceName: data.serviceName,
            servicePrice: data.servicePrice,
            status: 'pending'
        };

        const url = "https://desolate-springs-76107.herokuapp.com/addOrder";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        alert('Order placed successfully!');
    }

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <h2 className='mb-3'>Checkout</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Your Name</h5>
                        </label>
                        <input name="name" defaultValue={loggedInUser.displayName} className="form-control" type="text" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Your name is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Your email</h5>
                        </label>
                        <input name="email" defaultValue={loggedInUser.email} className="form-control" type="email" ref={register({ required: true })} />
                        {errors.email && <span style={{ color: 'red' }}>Your email is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Service Name</h5>
                        </label>
                        <input name="serviceName" defaultValue={serviceName} className="form-control" type="text" ref={register({ required: true })} />
                        {errors.serviceName && <span style={{ color: 'red' }}>Service name is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Service Price</h5>
                        </label>
                        <input name="servicePrice" defaultValue={servicePrice} className="form-control" type="number" ref={register({ required: true })} />
                        {errors.servicePrice && <span style={{ color: 'red' }}>Service price is required</span>}
                    </div>

                    <div style={{ textAlign: "end", paddingBottom: "50px" }}>
                        <button className="btn btn-success" type="submit">Checkout</button>
                    </div>

                </form>

                <h6>Pay Now (you can book our service now by pressing the Checkout button and pay later!)</h6>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Credit Card
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Debit Card
                    </label>
                </div>

                <div className='p-3 border'>
                    <ProcessPayment />
                </div>

            </div>
        </div>
    );
};

export default OrderCheckout;