import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Location = ({ place }) => {
    const { id, name, image, details } = place;
    return (
        <div>
            <Col className='position-relative'>
                <Card style={{ width: '22rem', height: "26em" }}>
                    <Card.Img variant="top" src={image} style={{ height: "160px" }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {
                                details?.length > 250 ?
                                    <> {details.slice(0, 200) + '...'}</> : <>{details}</>
                            }
                        </Card.Text>
                        <Button variant="warning" className='position-absolute bottom-0 start-50 translate-middle-x mb-3'><Link className='text-decoration-none text-dark'
                            to={`/destination/${id}`}>Booking <FaArrowRight /></Link></Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Location;