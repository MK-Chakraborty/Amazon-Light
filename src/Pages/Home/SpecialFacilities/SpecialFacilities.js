import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Facility from './Facility/Facility';

const SpecialFacilities = () => {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        fetch('./catagories.json')
        .then(res => res.json())
        .then(data => setFacilities(data));
    },[]);

    return (
        <Container fluid>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    facilities.map(facility => <Facility key={facility.c_id} facility={facility}/>)
                }
            </div>
        </Container>
    );
};

export default SpecialFacilities;