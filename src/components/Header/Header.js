import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import logo from '../../images/logo.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext)


    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Link to={'/'}>
                        <Image
                            src={logo}
                            width="120px"
                            height="50px"
                            className="d-inline-block align-top text-white"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center fw-semibold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-decoration-none mx-2 text-dark' to={'/'}> Home </Link>
                            <Link className='text-decoration-none mx-2  text-dark' to={'/destination'}> Destination </Link>
                            <Link className='text-decoration-none mx-2  text-dark' to={"/blog"} >Blogs</Link>
                            <Link className='text-decoration-none mx-2  text-dark' to={'/contact'}>Contact</Link>
                            <>
                                {
                                    user?.uid ?
                                        <> <Link className='text-decoration-none mx-2  text-dark'>{user?.displayName}</Link>
                                            <Link className='mx-2'>
                                                {
                                                    user?.photoURL &&
                                                    <Image
                                                        style={{ height: "30px" }}
                                                        roundedCircle
                                                        src={user.photoURL}
                                                    ></Image>
                                                }
                                            </Link>
                                            <Button variant="warning" className=' mx-2 '><Link className='text-decoration-none text-dark' onClick={handleLogOut}>LogOut</Link></Button>
                                        </>
                                        :
                                        <>
                                            <Button variant="warning" className=' mx-2 '><Link className='text-decoration-none text-dark' to={'/login'}>Login</Link></Button>
                                            <Button variant='warning' className='mx-2 '><Link className='text-decoration-none text-dark' to={'/signup'}>Register
                                            </Link></Button>
                                        </>
                                }
                            </>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr className='my-3 container' />
        </div>
    );
};

export default Header;
