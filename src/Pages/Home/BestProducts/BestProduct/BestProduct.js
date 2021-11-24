import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BestProduct = ({ feature }) => {
    return (
        <Card style={{ width: '24rem', margin: '15px 0' }}>
            <Card.Img variant="top" src={feature.img} className="p-5"/>
            <Card.Body>
                <Card.Title>{feature.name}</Card.Title>
                <Card.Title><i class="fas fa-dollar-sign"></i> {feature.price}</Card.Title>
                <Button variant="warning" className="me-2">Details</Button>
                <Button variant="outline-warning" className="ms-2">Add to<i class="fas fa-shopping-cart"></i></Button>
            </Card.Body>
        </Card>
    );
};

export default BestProduct;