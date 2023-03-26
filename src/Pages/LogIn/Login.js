import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Footer from "../../Components/Shared/Footer/Footer";
import UseAuth from "../../Hooks/UseAuth";
// import { useLocation, useHistory } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const { handleGoogleLogIn, user, handleLogOut } = UseAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || "/";
    const handleLogIn = () => {
        handleGoogleLogIn().then((result) => {
            // history.push(redirect_uri);
        });
    };
    return (
        <div className="login">
            {/* <button>login</button> */}
            <Container fluid="xl" className="login-container ">
                <Row className="login-row ">
                    <Col lg="6" className="login-col overflow-hidden p-0">
                        <div className="login-img-container">
                            <p>
                                Travel Far Enough
                                <br />
                                You'll meet yourself
                            </p>
                        </div>
                    </Col>
                    <Col lg="6" className="login-form--container p-0">
                        <h2 className="text-white text-uppercase  log">
                            Welcome to travio
                        </h2>
                        <p className="text-white">
                            Let's get started to your journey
                        </p>
                        <button className="login-btn" onClick={handleLogIn}>
                            <img
                                className="google-logo"
                                src="https://i.ibb.co/N3h7xpB/tiny-google-logo.png"
                                alt=""
                            />
                            Log In with Google
                        </button>
                        <hr className="" />
                        or
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
        </div>
    );
};

export default Login;
