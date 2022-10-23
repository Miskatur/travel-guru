import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {

    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const { createUser, userInfo, signInWithGoogle, signInWithFacebook } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(null)
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                handleUserinfo(name, photoURL)
                navigate('/')

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })

    }

    const handleUserinfo = (name, photoURL) => {
        userInfo(name, photoURL)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handleFaceookSignIn = () => {
        signInWithFacebook(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    return (
        <div className='my-5 w-50 mx-auto py-5'>
            <Form className='w-75 mx-auto shadow p-5 mb-5 bg-white rounded' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your PhotoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter Your photoURL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={passwordShown ? "text" : "password"} name="password" placeholder="Enter Your Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={togglePassword} type="checkbox" label="Show password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='my-2'><small>Already Have an Account?
                    <Link className='ms-1' to={'/login'}>Login Here</Link></small></p>
                <Form.Text className="text-danger">
                    {errorMessage}
                </Form.Text>
            </Form>

            <Button variant='primary' className='d-block w-50 mx-auto mt-5 mb-2 rounded-pill' onClick={handleGoogleSignIn}>Sign In With Google</Button>
            <Button variant='primary' className='d-block w-50 mx-auto my-2 rounded-pill' onClick={handleFaceookSignIn} >Sign In With Faceook</Button>

        </div>
    );
};

export default SignUp;