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

const layout = "py-md-2";
const contactList = "lh-1 d-flex flex-row mb-3";
const contactInfo = "d-flex flex-column justify-content-between ";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="py-5 ">
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        xl={3}
                        className={`d-flex flex-column ${layout}`}
                    >
                        <div className=" d-flex flex-row justify-content-start align-items-center my-2">
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
                        <p className="footer-info pt-2 pb-3 mb-0">
                            Our expert Travel Crafters design unique package
                            trips to exciting destinations to save you time and
                            money.
                        </p>
                        <h6 className="text-uppercase">Follow us on</h6>

                        <div className="social-icons pb-2 lh-1">
                            <a
                                // target="_blank"
                                rel="noopener"
                                href="https://www.facebook.com"
                            >
                                <FaInstagram className="social-icon" />
                            </a>
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
                        className={`d-flex flex-column ps-xl-5  ${layout} pages`}
                    >
                        <h3 className="text-uppercase py-2">Pages</h3>
                        <nav className="footer-nav">
                            <a href="#navbar">Home</a>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <Link to="/terms&Conditions">
                                Terms & conditions
                            </Link>
                        </nav>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        xl={3}
                        className={`d-flex flex-column contact-us  ${layout}`}
                    >
                        <h3 className="text-uppercase py-2">Contact Us</h3>
                        {/* <div className="contact-info"> */}
                        <div className={`${contactList} contact-list`}>
                            <span className="icon-container">
                                <BsTelephoneFill className="contact-icon" />
                            </span>
                            <div className={`${contactInfo} contact-info`}>
                                <span className="">Drop a Line</span>
                                <p className="d-inline-block m-0">
                                    +00 (123) 456 890
                                </p>
                            </div>
                        </div>
                        <div className={`${contactList} contact-list`}>
                            <span className="icon-container">
                                <MdEmail className="contact-icon" />
                            </span>
                            <div className={`${contactInfo} contact-info`}>
                                <span>Email Address</span>
                                <p className="d-inline-block m-0">
                                    travio@email.com
                                </p>
                            </div>
                        </div>
                        <div className={`${contactList} contact-list`}>
                            <span className="icon-container">
                                <MdLocationOn className="contact-icon" />
                            </span>
                            <div className={`${contactInfo} contact-info`}>
                                <span>Visit Office</span>
                                <p className="d-inline-block m-0">
                                    583 Main Street, NY, USA
                                </p>
                            </div>
                        </div>
                        {/* </div> */}
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={3} className={`${layout}`}>
                        <h3 className="text-uppercase py-2">
                            instagram Gallary
                        </h3>
                        <div className="insta-image--container">
                            <Link>
                                <img
                                    src="https://i.ibb.co/gzyTtHR/insta-image.jpg"
                                    alt=""
                                />
                            </Link>
                            <Link>
                                <img
                                    src="https://i.ibb.co/26CNmj8/insta-Image1.jpg"
                                    alt=""
                                />
                            </Link>
                            <Link>
                                <img
                                    src="https://i.ibb.co/c62JQBS/insta-image-3.jpg"
                                    alt=""
                                />
                            </Link>
                            <Link>
                                <img
                                    src="https://i.ibb.co/g6Khfkc/insta-image4.jpg"
                                    alt=""
                                />
                            </Link>
                            <Link>
                                <img
                                    src="https://i.ibb.co/Jtcf7CL/insta-image5.jpg"
                                    alt=""
                                />
                            </Link>
                            <Link>
                                <img
                                    src="https://i.ibb.co/rdSdpvw/insta-image7.jpg"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer--bottom text-center">
                <p className="m-0 text-uppercase ">
                    All Right Reserved &copy;2023 Copyrights by TRAVIO
                </p>
            </div>
        </footer>
    );
};

export default Footer;
