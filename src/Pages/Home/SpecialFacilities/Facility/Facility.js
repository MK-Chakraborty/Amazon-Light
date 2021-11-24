import React from 'react';
import { Card } from 'react-bootstrap';

const Facility = ({ facility }) => {
    return (
        <Card style={{ width: '16rem' }} className="my-3">
            <Card.Body>
                <Card.Title>{facility.catagory}</Card.Title>
            </Card.Body>
            <Card.Img variant="top" className="p-3" src={facility.img} />
        </Card>
    );
};

export default Facility;