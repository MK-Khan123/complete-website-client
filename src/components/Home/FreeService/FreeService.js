import React from 'react';
import freeServiceImg from '../../../images/free-service.jpg';

const FreeService = () => {
    return (
        <section style={{ backgroundColor: "rgb(245, 245, 245)" }} className='container'>
            <div className="row pt-5 mt-5">
                <div className="col-md-7">
                    <h3 style={{ borderBottom: '1px solid black' }}>Get A Free Service <span style={{ color: 'red' }}>Now!</span></h3>

                    <div className="mb-3 pt-3">
                        <input type="name" className="form-control" placeholder='Enter Name' />
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Phone" aria-label="Phone" />
                        </div>
                    </div>

                    <select className="form-select mb-3">
                        <option defaultValue>Select your vehicle type</option>
                        <option value="1">SUV</option>
                        <option value="2">Sedan</option>
                        <option value="3">Coupe</option>
                        <option value="4">Station Wagon</option>
                        <option value="5">Hatchback</option>
                        <option value="6">Mini Van</option>
                        <option value="7">Pickup Truck</option>
                        <option value="8">Other</option>
                    </select>

                    <input type="date" className="form-control mb-3" placeholder="Reservation Date" aria-label="Reservation Date" />

                    <button className="btn btn-primary mb-3">Submit</button>
                </div>
                <div className="col-md-5">
                    <img className='img-fluid' src={freeServiceImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default FreeService;