import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
                        <div className="navbar-nav ms-auto align-items-center">
                            <Link className="nav-link ms-5" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link ms-5" to="/orders">Orders</Link>
                            <Link className="nav-link ms-5" to="/admin">Admin</Link>
                            {loggedInUser.signedInUser ? <Link className="nav-link ms-5" to='/'>{loggedInUser.displayName}</Link>
                                : <Link className="nav-link ms-5" to="/login"><button className="btn btn-outline-danger">Login</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;