import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import img1 from '../../../images/banner_1.jpg'
import img2 from '../../../images/banner_2.jpg'
import img3 from '../../../images/banner_3.jpg'
import img4 from '../../../images/banner_4.jpg'
import img5 from '../../../images/banner_5.jpg'
import img6 from '../../../images/banner_6.jpg'

const Slider = () => {
    return (
        <Container fluid className="px-0 position-relative">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Enjoy Our Holiday Sell</h3>
                        <p>Buy your favorite items at 50% discount!!!</p>
                        <Button variant="success">Explore Products</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Black Friday Sell</h3>
                        <p>Buy now to save extra money. Stock limited.</p>
                        <Button variant="warning">Explore Products</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Your favorite beauty products</h3>
                        <p>We keep best branded beauty products just for you.</p>
                        <Button variant="light">Explore Products</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Luxurious Home Furnitures</h3>
                        <p>Get best deals on luxrious home items.</p>
                        <Button variant="secondary">Explore Products</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Fastest Shipment in the world</h3>
                        <p>We ship products with in the shortest time all over the world</p>
                        <Button variant="danger">Explore Products</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img6}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Eco Friendly Kid Items</h3>
                        <p>Eco firendly games will keep your kid safe.</p>
                        <Button variant="info">Explore Products</Button>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;