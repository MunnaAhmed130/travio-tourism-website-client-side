import React from "react";
import { Col, Row } from "react-bootstrap";

const Newsletter = () => {
    return (
        <section className="section">
            {/* <Container> */}
            <Row className="me-0">
                <Col md={8} lg={8}>
                    <h2>Subscribe Now and Quench Your Wonderlust</h2>
                </Col>
                <Col md={4} lg={4} className="join-col ">
                    <button className="join-btn">Join Us Now</button>
                </Col>
            </Row>
            {/* </Container> */}
        </section>
    );
};

export default Newsletter;
