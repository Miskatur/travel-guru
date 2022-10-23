import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaUser, FaUsers } from "react-icons/fa";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Hotels = () => {
    const hotels = useLoaderData()
    const { description, location, title, totalprice, rating, perperson, region, country } = hotels;
    console.log(hotels)

    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());


    return (
        <div className='container my-3'>
            <Row>
                <Col xs={1} lg={5}>
                    <Card>
                        <Card.Img variant="top" className='img-fluid' src={location} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <p><small>{region}, <b>{country}</b></small></p>
                            <div>
                                {
                                    description?.length > 480 ?
                                        <p>{description.slice(0, 480) + '...'}</p> :
                                        <p>{description}</p>
                                }
                                <div className='my-2 d-flex align-items-center justify-content-between mx-3'>
                                    <span className='d-flex align-items-center'>
                                        <FaStar className='text-warning me-2' /> {rating}/10
                                    </span>
                                    <span className='d-flex align-items-center'>
                                        <FaUser className='me-2' /> {perperson}
                                    </span>
                                    <span className='d-flex align-items-center'>
                                        <FaUsers className='me-2' /> {totalprice}
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1} lg={7}>
                    <div className='d-flex align-items-center justify-content-center w-100 h-100 '>
                        <Form className='border border-3 shadow p-5 mb-5 bg-white rounded'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Destination"
                                    className='fw-bold'
                                    defaultValue={'Dhaka'} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Origin"
                                    className='fw-bold'
                                    defaultValue={'Coxs Bazar'} />
                            </Form.Group>

                            <div className='d-flex'>
                                <Form.Group className="mb-3 me-3" controlId="formBasicFrom">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="datepic"
                                        placeholder="DateRange"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 ms-3" controlId="formBasicFrom">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="datepic"
                                        placeholder="DateRange"
                                        value={date2}
                                        onChange={(e) => setDate2(e.target.value)}
                                    />
                                </Form.Group>
                            </div>



                            <Button variant="warning" type="submit" className='d-flex justify-content-center w-100 py-2'>
                                <span className='text-dark fw-bold'>Start Booking</span>
                            </Button>
                        </Form>
                    </div>



                </Col>
            </Row>
        </div>
    );
};

export default Hotels;