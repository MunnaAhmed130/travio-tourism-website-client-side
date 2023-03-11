import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
    const { user, handleLogOut } = UseAuth();
    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" className="p-0">
            <Container fluid="lg" className="navbar-container">
                <Navbar.Brand className="">
                    <span className="navbar--span ">T</span>
                    ravio
                </Navbar.Brand>
                <div className="text-end">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="text-end">
                            <Link to="/home" className="link">
                                Home
                            </Link>
                            {/* <Link to="/placeOrder" className="link">
                                PlaceOrder
                            </Link> */}

                            {user?.email && (
                                <Link to="/myOrder" className="link">
                                    My Order
                                </Link>
                            )}
                            {user?.email && (
                                <Link to="/manageAllOrders" className="link">
                                    Manage All Service
                                </Link>
                            )}
                            {user?.email && (
                                <Link to="/addANewService" className="link">
                                    Add A New Service
                                </Link>
                            )}
                            {user?.email && (
                                <div>
                                    <span className="span">
                                        Signed In as : {user?.displayName}
                                    </span>
                                    <img
                                        className="profile"
                                        src={user.photoURL}
                                        alt=""
                                    />
                                </div>
                            )}
                            {user?.email ? (
                                <Button variant="danger" onClick={handleLogOut}>
                                    Log Out
                                </Button>
                            ) : (
                                <Link to="/logIn" className="link">
                                    Log In
                                </Link>
                            )}
                            {/* <Link className="link">lol</Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
