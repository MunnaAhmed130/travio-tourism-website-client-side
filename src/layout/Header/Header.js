import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import RippleButton from "../../Components/Shared/RippleButton/RippleButton";
import UseAuth from "../../Hooks/UseAuth";
import "./Header.css";

// navbar expand
const Header = () => {
    const { user, handleLogOut } = UseAuth();
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
                <Navbar.Brand className="p-0 text-uppercase text-white">
                    <Link to="/" className="text-decoration-none text-white">
                        <span className="logo-container position-relative">
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
                <div className="text-end">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="links">
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
                                    {/* <span className="span">
                                        Signed In as : {user?.displayName}
                                    </span> */}
                                    <img
                                        className="profile"
                                        src={user.photoURL}
                                        alt=""
                                    />
                                </div>
                            )}
                            {user.email ? (
                                // <img
                                //     className="profile"
                                //     src={user.photoURL}
                                //     alt=""
                                // />
                                <RippleButton
                                    // onClick={handleLogOut}
                                    className="logOut-btn border-0 bg-danger text-uppercase"
                                >
                                    Log Out
                                </RippleButton>
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
    );
};

export default Header;
