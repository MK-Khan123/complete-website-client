import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">
                            <h4>Add Email Address</h4>
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