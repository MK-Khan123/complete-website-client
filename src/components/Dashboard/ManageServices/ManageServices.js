import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'https://polar-gorge-00039.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDeleteService = (id) => {
        const url = `https://polar-gorge-00039.herokuapp.com/deleteService/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result));
        alert("Service removed successfully! Please go to Home page to see the update.");
    };

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <h2 className='mb-3 border-bottom'>Manage Services</h2>
                {/* A TABULAR DISPLAY OF SERVICES ALONG WITH THEIR RESPECTIVE DELETE BUTTON */}
                <table className="table table-striped table-hover border mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Details</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, index) => {
                                const { serviceName, serviceDetails, servicePrice, _id } = service;
                                return (
                                    <tr key={_id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{serviceName}</td>
                                        <td>{serviceDetails}</td>
                                        <td>$ {servicePrice}</td>
                                        <td><button className="btn btn-sm btn-success"><FontAwesomeIcon icon={faEdit} /></button> <button onClick={() => handleDeleteService(_id)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
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

export default ManageServices;