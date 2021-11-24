import React from 'react';
import BestProducts from '../BestProducts/BestProducts';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import SpecialFacilities from '../SpecialFacilities/SpecialFacilities';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Slider/>
            <SpecialFacilities/>
            <BestProducts></BestProducts>
        </div>
    );
};

export default Home;