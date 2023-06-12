import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import User from "../../Components/header/User";
import "./Header.css";

// navbar expand
const Header = () => {
    const { user } = UseAuth();

    const layout = "lg";
    return (
        <Navbar
            collapseOnSelect
            expand={`${layout}`}
            variant="dark"
            className="p-0"
            id="navbar"
        >
            <Container
                // fluid
                fluid="lg"
                className={`navbar-container align-items-${layout}-center align-items-start`}
            >
                <Navbar.Brand className="p-0 text-uppercase text-white align-content-center">
                    <Link to="/" className="text-decoration-none text-white ">
                        <span className="logo-container position-relative ">
                            <img
                                className="logo"
                                src="https://i.ibb.co/ZgtNRjn/logo-small-white.png"
                                alt="logo"
                            />
                            <span></span>
                        </span>
                        Travio
                    </Link>
                </Navbar.Brand>
                <div className="text-end nav-toggle">
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className="mt-2"
                    />
                    <Navbar.Collapse id="navbarScroll" className="">
                        <Nav
                            className={` align-items-${layout}-center  text-end`}
                        >
                            <div
                                className={`links d-flex flex-column flex-${layout}-row text-end`}
                            >
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
                            </div>

                            {user?.email ? (
                                <User />
                            ) : (
                                <Link to="/logIn" className="link">
                                    Log In
                                </Link>
                            )}
                            {/* {user.email ? (
                                <RippleButton className="logOut-btn border-0 bg-danger text-uppercase">
                                    <FiLogOut className="me-1" /> Log Out
                                </RippleButton>
                            ) : (
                                <Link to="/logIn" className="link">
                                    Log In
                                </Link>
                            )} */}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
