import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center my-5 py-5'>
            <h1>OOPS! 404 Not Found</h1>
            <Image
                src='https://media1.giphy.com/media/3o6wrvdHFbwBrUFenu/200.gif'>
            </Image>
            <h3>Go to <Link to={'/'}>Home Page</Link></h3>

        </div>
    );
};

export default ErrorPage;