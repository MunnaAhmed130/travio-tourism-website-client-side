import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
    return (
        <section className="newsletter--container">
            {/* <Container> */}
            <Row className="me-0">
                <Col md={6} lg={6}></Col>
                <Col md={6} lg={6} className="join-col ">
                    <h2>Discover your dream tour with our Newletter</h2>

                    <button className="join-btn">Join Us Now</button>
                </Col>
            </Row>
            {/* </Container> */}
        </section>
    );
};

export default Newsletter;
