import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import Destination from "../../Components/Destination/Destination";
import MidBanner from "../../Components/MidBanner/MidBanner";
import TourPlans from "../../Components/TourPlans/TourPlans";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TourPlans></TourPlans>
            <MidBanner></MidBanner>
            <Destination></Destination>

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
        </>
    );
};

export default Home;
