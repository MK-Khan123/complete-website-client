import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/auto-shop.jpg';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img src={logo} alt="" width="60" />
                    <Link className="navbar-brand" to="/">City Wheels Auto Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link ms-5" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link ms-5" to="/orders">Orders</Link>
                            <Link className="nav-link ms-5" to="/admin">Admin</Link>
                            <Link className="nav-link ms-5" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;