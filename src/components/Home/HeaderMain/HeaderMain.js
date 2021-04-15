import React from 'react';
import img1 from '../../../images/carouselBg1.jpg';
import img2 from '../../../images/carouselBg2.jpg';
import img3 from '../../../images/carouselBg3.jpg';

const HeaderMain = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>City Wheels Auto Shop</h1>
                        <h3>The best automotive service provider in the country</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>We always provide you</h1>
                        <h3>Best car repair services</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Make your car last longer and attractive</h1>
                        <h3>We always provide the best service to our clients</h3>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;