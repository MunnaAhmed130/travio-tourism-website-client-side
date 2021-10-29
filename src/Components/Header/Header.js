import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Header.css'

const Header = () => {
    const { user, handleLogOut } = UseAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="#home">Travio</Navbar.Brand>
                    <div className="route-links">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="navbarScroll">

                            <Nav >
                                {/* <Nav.Link><Link to="/home">Home</Link></Nav.Link> */}
                                <Link to='/home'>Home</Link>


                                {user?.email &&

                                    <Link to='/myOrder'>My Order</Link>

                                }
                                {user?.email &&

                                    <Link to='/ManageAllOrders'>Manage All Service</Link>

                                }
                                {user?.email &&

                                    <Link to='/AddANewService'>Add A New Service</Link>

                                }
                                {
                                    user?.email ? <Button variant="primary" onClick={handleLogOut}>Log Out</Button> : <Link to='/logIn'>Log In</Link>
                                }
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;