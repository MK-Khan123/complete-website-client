import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../../images/carouselBg1.jpg';
import img2 from '../../../images/carouselBg2.jpg';
import img3 from '../../../images/carouselBg3.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <Container>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 style={{ fontSize: 'calc(20px + 2vmin)' }}>City Wheels Auto Shop</h2>
                        <p style={{ fontSize: 'calc(10px + 2vmin)' }}>The best automotive service provider in the country</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 style={{ fontSize: 'calc(20px + 2vmin)' }}>We always provide you</h2>
                        <p style={{ fontSize: 'calc(10px + 2vmin)' }}>Best car repair services</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 style={{ fontSize: 'calc(20px + 2vmin)' }}>Make your car last longer and attractive</h2>
                        <p style={{ fontSize: 'calc(10px + 2vmin)' }}>We always provide the best service to our clients</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default HeaderMain;