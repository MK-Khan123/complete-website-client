import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const adminEmail = {
            email: data.email
        };

        const url = 'https://polar-gorge-00039.herokuapp.com/addAdmin';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(adminEmail)
        })
            .then(res => console.log('server side response', res));
        alert("Admin added successfully!");
    };

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">
                            <h2 className='mb-3 border-bottom'>Add Email Address</h2>
                        </label>
                        <input name="email" className="form-control" type="email" ref={register({ required: true })} />
                        {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                    </div>
                    <div style={{ textAlign: "end" }}>
                        <button className="btn btn-success" type="submit">Add as an admin</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;