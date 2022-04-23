import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import pageUnderConstruction from '../../images/page-construction.jpg';

const ContactUs = () => {
    return (
        <div>
            <NavigationBar />
            <Container>
                <div className="text-center">
                    <div className='m-auto' style={{ width: '80vh' }}>
                        <img fluid src={pageUnderConstruction} width='100%' alt="" />
                    </div>
                    <Link to='/home'>
                        <Button variant="danger" size="lg" className='m-4'>Go Back To Home</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;