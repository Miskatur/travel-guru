import React from 'react';
import { Container, Form, Image } from 'react-bootstrap';
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBTextArea
} from 'mdb-react-ui-kit';
import logo from '../images/logo.png'

const Contact = () => {
    return (
        <Container className='my-5 py-5'>

            <div className='row my-5'>
                <div className='col-md-7'>

                    <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                        <Image src={logo} fluid height={300} width={300}></Image>
                        <h1 className='mt-5'>Travel Guru</h1>
                        <h3>Passionate about Travel and Traveller.</h3>
                        <p><address>Muradpur, Chittagong, Bangladesh</address></p>
                    </div>

                </div>
                <div className='col-md-5'>
                    <Form>

                        <h3 className='text-center'>Have any inquery about Our website?</h3>
                        <h1 className='text-center'>Contact Us</h1>
                        <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
                        <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
                        <MDBTextArea label='Message' id='textAreaExample' rows={4} />


                        <MDBCheckbox
                            wrapperClass='d-flex justify-content-center mb-4'
                            id='form4Example4'
                            label='Send me a copy of this message'
                            defaultChecked
                        />


                        <MDBBtn type='submit' className='mb-4' block>
                            Send
                        </MDBBtn>
                    </Form></div>
            </div>

        </Container>
    );
};

export default Contact;