import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BestProduct from './BestProduct/BestProduct';

const BestProducts = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        fetch('./featureProducts.json')
        .then(res => res.json())
        .then(data => setFeatured(data))
    },[])
    return (
        <Container className="my-5">
            <h3 className="text-uppercase">Featured <i className="fab fa-amazon"></i> Products</h3>
            <div className="d-flex justify-content-around flex-wrap">
                {
                    featured.map(feature => <BestProduct key={feature.key} feature={feature}/>)
                }
            </div>
        </Container>
    );
};

export default BestProducts;