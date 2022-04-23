import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const NavigationBar = () => {
    const [loggedInUser] = useContext(UserContext);
    const firstName = loggedInUser?.displayName?.split(" ")[0];

    return (
        <Container>
            <Navbar expand="lg" sticky='top'>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={logo}
                            width="60"
                            className="d-inline-block"
                        />{' '}
                        City Wheels Auto Shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} className='ms-4 text-dark' to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className='ms-4 text-dark' to="/myOrderList">Dashboard</Nav.Link>
                            <Nav.Link as={Link} className='ms-4 text-dark' to="/ourTeam">Our Team</Nav.Link>
                            <Nav.Link as={Link} className='ms-4 text-dark' to="/contactUs">Contact Us</Nav.Link>

                            {loggedInUser.signedInUser ?
                                <Link className="nav-link" to='/'>
                                    <Button className='ms-4' variant="outline-danger">{firstName}</Button>
                                </Link>
                                :
                                <Link className="nav-link" to="/login">
                                    <Button className='ms-4' variant="outline-danger">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <img src={logo} alt="" width="60" />
                        <Link className="navbar-brand" to="/">City Wheels Auto Shop</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto align-items-center">
                                <Link className="nav-link ms-5" aria-current="page" to="/home">Home</Link>
                                <Link className="nav-link ms-5" to="/myOrderList">Dashboard</Link>
                                <Link className="nav-link ms-5" to="/ourTeam">Our Team</Link>
                                <Link className="nav-link ms-5" to="/contactUs">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </nav> 
            */}
        </Container>
    );
};

export default NavigationBar;


