import React from 'react';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import SpecialFacilities from '../SpecialFacilities/SpecialFacilities';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Slider/>
            <SpecialFacilities/>
        </div>
    );
};

export default Home;