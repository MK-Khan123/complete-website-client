import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCommentDots, faListAlt, faUserPlus, faThLarge, faPlusSquare, faHome } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <div>
                <Link to="/orderCheckout" className="nav-link text-white" aria-current="true"><FontAwesomeIcon icon={faCartPlus} /> My Order</Link>
            </div>
            <div>
                <Link to="/myOrderList" className="nav-link text-white"><FontAwesomeIcon icon={faListAlt} /> My Order List</Link>
            </div>
            <div>
                <Link to="/addReview" className="nav-link text-white"><FontAwesomeIcon icon={faCommentDots} /> Add Review</Link>
            </div>




            <div>
                <Link to="/allOrderList" className="nav-link text-white"><FontAwesomeIcon icon={faListAlt} /> All Order List</Link>
            </div>
            <div>
                <Link to="/addService" className="nav-link text-white" aria-current="true"><FontAwesomeIcon icon={faPlusSquare} /> Add Service</Link>
            </div>
            <div>
                <Link to="/makeAdmin" className="nav-link text-white"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
            </div>
            <div>
                <Link to="/manageServices" className="nav-link text-white"><FontAwesomeIcon icon={faThLarge} /> Manage Services</Link>
            </div>
            
            
            
            <div>
                <Link to="/" className="nav-link text-white"><FontAwesomeIcon icon={faHome} /> Home</Link>
            </div>
        </div>
    );
};

export default Sidebar;