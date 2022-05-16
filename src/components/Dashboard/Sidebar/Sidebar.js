import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faListAlt, faUserPlus, faThLarge, faPlusSquare, faHome } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { UserContext } from '../../../App';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Sidebar = () => {

    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const url = 'https://desolate-springs-76107.herokuapp.com/isAdmin?email=' + loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsAdmin(true);
                }
            });
    }, [loggedInUser.email]);

    return (
        <div>
            <Navbar bg="light" expand={false} className="mb-3 d-md-none">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='offcanvas-font' id={`offcanvasNavbarLabel-expand-${false}`}>
                                City Wheels Auto Shop
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">
                                    <Link to="/myOrderList" className="text-secondary text-decoration-none offcanvas-font"><FontAwesomeIcon icon={faListAlt} /> My Order List</Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to="/addReview" className="text-secondary text-decoration-none offcanvas-font"><FontAwesomeIcon icon={faCommentDots} /> Add Review</Link>
                                </Nav.Link>
                                {
                                    isAdmin &&
                                    <div>
                                        <Nav.Link href="#action3">
                                            <Link to="/allOrderList" className="text-secondary text-decoration-none offcanvas-font"><FontAwesomeIcon icon={faListAlt} /> All Order List</Link>
                                        </Nav.Link>
                                        <Nav.Link href="#action4">
                                            <Link to="/addService" className="text-secondary text-decoration-none offcanvas-font" aria-current="true"><FontAwesomeIcon icon={faPlusSquare} /> Add Service</Link>
                                        </Nav.Link>
                                        <Nav.Link href="#action5">
                                            <Link to="/makeAdmin" className="text-secondary text-decoration-none offcanvas-font"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                                        </Nav.Link>
                                        <Nav.Link href="#action6">
                                            <Link to="/manageServices" className="text-secondary text-decoration-none offcanvas-font"><FontAwesomeIcon icon={faThLarge} /> Manage Services</Link>
                                        </Nav.Link>
                                    </div>
                                }
                                <Nav.Link href="#action7">
                                    <Link to="/" className="text-secondary text-decoration-none offcanvas-font"><FontAwesomeIcon icon={faHome} /> Home</Link>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div className='d-none d-md-block sidebar py-5 px-1'>
                <div>
                    <Link to="/myOrderList" className="nav-link text-white"><FontAwesomeIcon icon={faListAlt} /> My Order List</Link>
                </div>
                <div>
                    <Link to="/addReview" className="nav-link text-white"><FontAwesomeIcon icon={faCommentDots} /> Add Review</Link>
                </div>
                {
                    isAdmin &&
                    <div>
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
                    </div>
                }
                <div>
                    <Link to="/" className="nav-link text-white"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;