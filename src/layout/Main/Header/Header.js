import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
    const { user, handleLogOut } = UseAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-1 fw-bold lh-1">
                        <span className="bg-white px-1 d-inline-block text-black">
                            T
                        </span>
                        ravio
                    </Navbar.Brand>
                    <div className="">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="text-start">
                                <Link to="/home" className="link">
                                    Home
                                </Link>
                                <Link to="/placeOrder" className="link">
                                    PlaceOrder
                                </Link>

                                {user?.email && (
                                    <Link to="/myOrder" className="link">
                                        My Order
                                    </Link>
                                )}
                                {user?.email && (
                                    <Link
                                        to="/manageAllOrders"
                                        className="link"
                                    >
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
                                    <Button
                                        variant="danger"
                                        onClick={handleLogOut}
                                    >
                                        Log Out
                                    </Button>
                                ) : (
                                    <Link to="/logIn" className="link">
                                        Log In
                                    </Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
