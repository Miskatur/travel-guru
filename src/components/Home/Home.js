import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../images/images/Rectangle 26.png'
import pic2 from '../../images/images/Rectangle 27.png'
import pic3 from '../../images/images/Rectangle 28.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className="p-5 text-center bg-image mt-3 custom">

            <Row>
                <Col xs={12} lg={6} className='d-lg-flex align-items-center justify-content-center'>
                    <div className='text-white'>
                        <h1>Travel Guru Travel Agency</h1>
                        <p className='mx-lg-5 px-lg-5'>Travelling is a Passion to us. We provide you the best deal and offers for you. Enroll our Offers and enjoy your holiday's like never before.</p>
                        <Button variant='warning'><Link className='text-decoration-none text-dark' to={'/destination'}>Explore More <FaArrowRight className='ms-2' /> </Link></Button>
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={pic1}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={pic2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={pic3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;