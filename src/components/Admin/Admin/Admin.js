import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faThLarge, faListAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../Shared/Navbar/Navbar';

const Admin = () => {
    return (
        <section>
            <Navbar />
            <div className="sidebar d-flex flex-column justify-content-start col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <div>
                    <Link to="" class="nav-link text-white"><FontAwesomeIcon icon={faListAlt} /> Order List</Link>
                </div>
                <div>
                    <Link to="" class="nav-link text-white" aria-current="true"><FontAwesomeIcon icon={faPlusSquare} /> Add Service</Link>
                </div>
                <div>
                    <Link to="" class="nav-link text-white"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                </div>
                <div>
                    <Link to="" class="nav-link text-white"><FontAwesomeIcon icon={faThLarge} /> Manage Services</Link>
                </div>
            </div>
        </section>
    );
};

export default Admin;