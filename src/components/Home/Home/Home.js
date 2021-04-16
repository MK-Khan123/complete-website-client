import React from 'react';
import Experts from '../Experts/Experts';
import FreeService from '../FreeService/FreeService';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMain />
            <Services />
            <Reviews />
            <Experts />
            <FreeService />
        </div>
    );
};

export default Home;