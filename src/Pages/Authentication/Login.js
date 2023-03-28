import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, redirect } from "react-router-dom";
import RippleButton from "../../Components/Shared/RippleButton/RippleButton";
// import Footer from "../../Components/Shared/Footer/Footer";
import UseAuth from "../../Hooks/UseAuth";
// import { useLocation, useHistory } from 'react-router-dom';
import "./Authentication.css";

const Login = () => {
    const { handleGoogleLogIn, user, handleLogOut } = UseAuth();
    // console.log(user.uid);
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || "/";
    const handleLogIn = () => {
        handleGoogleLogIn().then((result) => {
            // history.push(redirect_uri);
            // redirect("/");
            <Navigate to="/home" />;
        });
    };

    return (
        <section className="login text-white ">
            {/* <button>login</button> */}
            <Container fluid>
                <Row className="auth-row ">
                    <Col
                        lg="6"
                        sm="12"
                        className="login-col overflow-hidden p-0"
                    >
                        <div className="login-img-container position-relative w-100 h-100 d-flex flex-row align-items-center">
                            <p className="">
                                Travel Far Enough
                                <br />
                                You'll meet yourself
                            </p>
                        </div>
                    </Col>
                    <Col lg="6" sm="12" className="login-form--col p-0">
                        <div className="login-card d-flex flex-column align-items-center mx-1 px-sm-4 px-4 py-4">
                            <h2 className="text-white text-uppercase  log">
                                Welcome to travio
                            </h2>
                            <p className="text-white ">
                                Let's get started on your journey
                            </p>
                            <RippleButton
                                className="login-btn p-0"
                                onClick={handleLogIn}
                            >
                                <img
                                    className="google-logo"
                                    src="https://i.ibb.co/N3h7xpB/tiny-google-logo.png"
                                    alt=""
                                />
                                Log In with Google
                            </RippleButton>

                            {/* <span className="or-container w-100 my-3">
                                <span className="or px-2  text-center">Or</span>
                                <span className="hr"></span>
                            </span> */}

                            <div className="line my-3"></div>
                            <Form className="login-form w-100 pt-3 pt-sm-4">
                                <Form.Group
                                    className="mb-3 mb-sm-4"
                                    controlId="formBasicEmail"
                                >
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                    />
                                    {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone
                                        else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group
                                    className="mb-3 mb-sm-4"
                                    controlId="formBasicPassword"
                                >
                                    {/* <Form.Label>Password</Form.Label> */}
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <div className="form-options d-flex flex-row align-itemx-start justify-content-between">
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicCheckbox"
                                    >
                                        <Form.Check
                                            type="checkbox"
                                            label="Remember me"
                                        />
                                    </Form.Group>
                                    <Link className="text-decoration-none text-white">
                                        Forgot password
                                    </Link>
                                </div>
                                <RippleButton
                                    className="submit-btn p-0"
                                    // type="submit"
                                    onClick={handleLogIn}
                                >
                                    Log In
                                </RippleButton>
                            </Form>
                            <p className="mt-1">
                                Don't have an account?{" "}
                                <Link className="text-decoration-none">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                        {/* {user?.email ? (
                            <button
                                className="logOut-btn"
                                onClick={handleLogOut}
                            >
                                Log Out
                            </button>
                        ) : (
                            <button
                                className="login-btn text-uppercase"
                                onClick={handleLogIn}
                            >
                                <img
                                    className="google-logo"
                                    src="https://i.ibb.co/N3h7xpB/tiny-google-logo.png"
                                    alt=""
                                />
                                Log In
                            </button>
                        )} */}
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </section>
    );
};

export default Login;
