import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Location from '../Location/Location';

const Destination = () => {
    const location = useLoaderData()
    return (
        <div className='container-md my-5 px-md-5'>
            <Row xs={1} md={3} className="g-md-4">
                {
                    location.map(place => <Location
                        key={place.id}
                        place={place}
                    ></Location>)
                }
            </Row>
        </div>
    );
};

export default Destination;