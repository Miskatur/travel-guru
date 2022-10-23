import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate()

    const { signInUser, signInWithGoogle, signInWithFacebook } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(null)

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })

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
                navigate(from, { replace: true })

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }


    const handleFacebookSignIn = () => {
        signInWithFacebook(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    return (
        <div className='my-5  w-50 mx-auto p-5'>
            <Form className='w-75 mx-auto shadow p-5 mb-5 bg-white rounded' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={passwordShown ? "text" : "password"} name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={togglePassword} type="checkbox" label="Show password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='my-2'><small>New here? Create a new account. <Link className='ms-1' to={'/signup'}>Register Now</Link></small></p>
                <Form.Text className="text-danger">
                    {errorMessage}
                </Form.Text>
            </Form>
            <div className='d-flex w-50 mx-auto'>
                <hr className='my-3 w-100 mx-3' style={{ backgroundColor: "black", border: "1px solid", height: "0px", margin: "0px" }} />
                <span> Or </span>
                <hr className='my-3 w-100 mx-3' style={{ backgroundColor: "black", border: "1px solid", height: "0px", margin: "0px" }} />
            </div>

            <Button variant='primary' className='d-block w-50 mx-auto my-2 rounded-pill' onClick={handleGoogleSignIn}>Sign In With Google</Button>
            <Button variant='primary' className='d-block w-50 mx-auto my-2 rounded-pill' onClick={handleFacebookSignIn}>Sign In With Faceook</Button>

        </div>
    );
};

export default Login;