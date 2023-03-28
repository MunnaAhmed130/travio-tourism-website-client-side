import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import RippleButton from "../../Components/Shared/RippleButton/RippleButton";
import UseAuth from "../../Hooks/UseAuth";
import "./Authentication.css";

const Register = () => {
    const { handleGoogleLogIn, user, handleLogOut } = UseAuth();
    const handleLogIn = () => {
        handleGoogleLogIn().then((result) => {
            // history.push(redirect_uri);
            // redirect("/");
            // <Navigate to="/home" />;
        });
    };
    const showPassword = () => {};
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
                                Create an Account
                            </h2>
                            <p className="text-white ">
                                Let's get started on your journey
                            </p>
                            {/* <RippleButton
                                className="login-btn p-0"
                                onClick={handleLogIn}
                            >
                                <img
                                    className="google-logo"
                                    src="https://i.ibb.co/N3h7xpB/tiny-google-logo.png"
                                    alt=""
                                />
                                Log In with Google
                            </RippleButton> */}

                            {/* <span className="or-container w-100 my-3">
                            <span className="or px-2  text-center">Or</span>
                            <span className="hr"></span>
                        </span> */}

                            {/* <div className="line my-3"></div> */}
                            <Form className="login-form w-100 pt-3 pt-sm-4">
                                <Form.Group
                                    className="mb-3 mb-sm-4 input-container"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3 mb-sm-4 input-container"
                                    controlId="formBasicName"
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
                                        type="password"
                                        placeholder="Password"
                                    />
                                    {/* <AiOutlineEye /> */}
                                    <span
                                        className="d-flex align-items-center px-2 bg-transparent border-0 text-white icon-btn"
                                        onClick={showPassword}
                                    >
                                        <AiOutlineEyeInvisible className="eye-icon" />
                                    </span>
                                </Form.Group>
                                {/* <div className="form-options d-flex flex-row align-itemx-start justify-content-between">
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
                                </div> */}
                                <RippleButton
                                    className="submit-btn p-0"
                                    // type="submit"
                                    onClick={handleLogIn}
                                >
                                    Create account
                                </RippleButton>
                            </Form>
                            <p className="mt-1">
                                Already have an account?{" "}
                                <Link
                                    className="text-decoration-none"
                                    to="/login"
                                >
                                    Log in
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

export default Register;
