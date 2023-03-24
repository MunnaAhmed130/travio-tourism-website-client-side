import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import {
    FaInstagram,
    FaFacebookSquare,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

const layout = "py-1 border";
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="py-2">
                    <Col xs={12} sm={12} md={6} xl={3} className={`${layout}`}>
                        <div className="web-info--container d-flex flex-row justify-content-start align-items-center ">
                            <span className="logo-container d-flex position-relative">
                                <img
                                    className="logo"
                                    src="https://i.ibb.co/ZgtNRjn/logo-small-white.png"
                                    alt="logo"
                                />
                                <span className="logo-bg"></span>
                            </span>
                            <h3 className="website-name text-uppercase m-0 ms-1">
                                Travio
                            </h3>
                        </div>
                        <p className="footer-info py-2 mb-0">
                            Our expert Travel Crafters design unique package
                            trips to exciting destinations, with all the details
                            covered to save you time and money.
                        </p>
                        <h6 className="text-uppercase">Follow us on</h6>

                        <div className="social-icons ">
                            <Link>
                                <FaInstagram className="social-icon" />
                            </Link>
                            <Link>
                                <FaFacebookSquare className="social-icon" />
                            </Link>
                            <Link>
                                <FaTwitter className="social-icon" />
                            </Link>
                            <Link>
                                <FaLinkedin className="social-icon" />
                            </Link>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        xl={3}
                        className={`${layout} pages`}
                    >
                        <h3 className="text-uppercase">Pages</h3>
                        <Link>Home</Link>
                        <Link>About Us</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Contact Us</Link>
                        <Link>Terms & conditions</Link>
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={3} className={`${layout}`}>
                        <h3 className="text-uppercase">Contact Us</h3>
                        <div className="contact-info">
                            <div className="lh-1">
                                <span className="icon-container">
                                    <BsTelephoneFill />
                                </span>
                                <p className="d-inline-block">
                                    +00 (123) 456 890
                                </p>
                            </div>
                            <div className="lh-1">
                                <span className="icon-container">
                                    <MdEmail />
                                </span>
                                <p className="d-inline-block">
                                    travio@email.com
                                </p>
                            </div>
                            <div className="lh-1">
                                <span className="icon-container">
                                    <MdLocationOn />
                                </span>
                                <p className="d-inline-block">
                                    583 Main Street, NY, USA
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={3} className={`${layout}`}>
                        <h3 className="text-uppercase">instagram Gallary</h3>
                    </Col>
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
