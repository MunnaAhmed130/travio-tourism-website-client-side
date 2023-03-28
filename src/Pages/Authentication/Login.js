import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, redirect } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import RippleButton from "../../Components/Shared/RippleButton/RippleButton";
// import Footer from "../../Components/Shared/Footer/Footer";
import UseAuth from "../../Hooks/UseAuth";
// import { useLocation, useHistory } from 'react-router-dom';
import "./Authentication.css";

const Login = () => {
    const { handleGoogleLogIn, user, handleLogOut } = UseAuth();
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
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
        <section className="auth  text-white ">
            {/* <button>login</button> */}
            <Container fluid>
                <Row className="auth-row ">
                    <Col
                        lg="6"
                        sm="12"
                        className="login-col overflow-hidden p-0"
                    >
                        <div className="auth-img-container position-relative w-100 h-100 d-flex flex-row align-items-center">
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
                                    className="mb-3 mb-sm-4 input-container"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3 mb-sm-4 d-flex input-container"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Control
                                        type={passwordType}
                                        placeholder="Password"
                                    />
                                    <span
                                        className="d-flex align-items-center px-2 bg-transparent border-0 text-white icon-btn"
                                        onClick={togglePassword}
                                    >
                                        {passwordType === "password" ? (
                                            <AiOutlineEyeInvisible className="eye-icon" />
                                        ) : (
                                            <AiOutlineEye className="eye-icon" />
                                        )}
                                    </span>
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

                                    <Link className=" text-white">
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
                            <p className="mt-1 form-text">
                                Not registered yet?&nbsp;
                                <Link className=" register-link" to="/register">
                                    Create account
                                </Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </section>
    );
};

export default Login;
