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
                    <Navbar.Brand className="">Travio</Navbar.Brand>
                    <div className="route-links">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav>
                                <Link to="/home">Home</Link>
                                <Link to="/placeOrder">PlaceOrder</Link>

                                {user?.email && (
                                    <Link to="/myOrder">My Order</Link>
                                )}
                                {user?.email && (
                                    <Link to="/manageAllOrders">
                                        Manage All Service
                                    </Link>
                                )}
                                {user?.email && (
                                    <Link to="/addANewService">
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
                                    <Link to="/logIn">Log In</Link>
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
