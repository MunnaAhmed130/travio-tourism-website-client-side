import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="mini-footer">
                    <Col xs={12} sm={6}></Col>
                    <Col xs={12} sm={6}>
                        {/* Terms of Service | Privacy Policy */}
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
