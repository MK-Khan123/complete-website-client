import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState();

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '6a505607e7aa21f071b1c0ec3e817fdf');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(error => console.log(error));

        const currentTime = new Date().getTime(); //This 4s delay is used so that the image gets uploaded on ImgBB and generates an URL which will be sent to MongoDB database after pressing 'Save'.
        while (currentTime + 4000 >= new Date().getTime());
    };

    const onSubmit = data => {
        const serviceData = {
            serviceName: data.serviceName,
            serviceDetails: data.serviceDetails,
            servicePrice: data.servicePrice,
            serviceImage: imageURL
        };
        const url = 'http://localhost:5000/addService';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res));
        alert("Service added successfully! Please go to Home page to see the update.");
    };

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <h2 style={{ paddingBottom: "30px", paddingTop: "20px" }}>Add your services here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Service Name</h5>
                        </label>
                        <input name="serviceName" className="form-control" type="text" ref={register({ required: true })} />
                        {errors.serviceName && <span style={{ color: 'red' }}>Service name is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Upload Service Image</h5>
                        </label>
                        <input name="serviceImage" className="form-control" onChange={handleImageUpload} type="file" ref={register({ required: true })} />
                        {errors.serviceImage && <span style={{ color: 'red' }}>Service image is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Service Details</h5>
                        </label>
                        <input name="serviceDetails" className="form-control" type="text" ref={register({ required: true })} />
                        {errors.serviceDetails && <span style={{ color: 'red' }}>Service details is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Service Price</h5>
                        </label>
                        <input name="servicePrice" className="form-control" type="number" ref={register({ required: true })} />
                        {errors.servicePrice && <span style={{ color: 'red' }}>Service price is required</span>}
                    </div>

                    <div style={{ textAlign: "end", paddingBottom: "50px" }}>
                        <button className="btn btn-success" type="submit">Add Service</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddService;