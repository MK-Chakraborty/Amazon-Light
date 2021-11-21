import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
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
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img6}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;