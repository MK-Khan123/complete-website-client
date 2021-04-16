import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCommentDots, faListAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../Shared/Navbar/Navbar';
import './Orders.css';

const Orders = () => {
    return (
        <section>
            <Navbar />
            <div className="sidebar d-flex flex-column justify-content-start col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <div>
                    <Link to="" class="nav-link text-white" aria-current="true"><FontAwesomeIcon icon={faCartPlus} /> Order</Link>
                </div>
                <div>
                    <Link to="" class="nav-link text-white"><FontAwesomeIcon icon={faListAlt} /> Order List</Link>
                </div>
                <div>
                    <Link to="" class="nav-link text-white"><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
                </div>
            </div>
        </section>
    );
};

export default Orders;