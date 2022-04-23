import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorImage from '../../images/ErrorPage.jpg';

const NoMatch = () => {
    return (
        <Container>
            <div className="text-center">
                <div className='m-auto' style={{ width: '80vh' }}>
                    <img fluid src={errorImage} width='100%' alt="" />
                </div>
                <Link to='/home'>
                    <Button variant="danger" size="lg" className='m-4'>Go Back To Home</Button>
                </Link>
            </div>
        </Container>
    );
};

export default NoMatch;