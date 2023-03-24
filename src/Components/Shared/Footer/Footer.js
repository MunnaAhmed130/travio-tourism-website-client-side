import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="">
                    <Col xs={12} sm={6} className="">
                        <div className="web-info--container d-flex flex-row justify-content-start align-items-center my-2">
                            <span className="logo-container d-flex position-relative">
                                <img
                                    className="logo"
                                    src="https://i.ibb.co/ZgtNRjn/logo-small-white.png"
                                    alt="logo"
                                />
                                <span className="logo-bg"></span>
                            </span>
                            <span className="website-name text-uppercase">
                                Travio
                            </span>
                        </div>
                    </Col>
                    {/* <Col xs={12} sm={6}></Col> */}
                </Row>
            </Container>
            <div className="footer--bottom text-center">
                <p className="m-0 text-uppercase ">
                    All Right Reserved &copy;2023 Copyrights by TRAVIO
                </p>
            </div>
        </div>
    );
};

export default Footer;
