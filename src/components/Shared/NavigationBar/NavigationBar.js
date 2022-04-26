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
        </Container>
    );
};

export default NavigationBar;


