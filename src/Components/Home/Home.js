import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import TourPlans from '../TourPlans/TourPlans';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPlans></TourPlans>
            <section className="mid-banner">
                <div >
                    <p>Come With Us</p>
                    <h2>Relax and Enjoy</h2>
                    <p></p>
                </div>
            </section>
            <Destination></Destination>
            <section className="section">
                {/* <Container> */}
                <Row className="me-0">
                    <Col md={8} lg={8} >
                            <h2>Subscribe Now and Quench Your Wonderlust</h2>
                        </Col>
                    <Col md={4} lg={4} className="join-col " >
                        <button className="join-btn">Join Us Now</button>
                        </Col>
                    </Row>
                {/* </Container> */}

            </section>
        </div>
    );
};

export default Home;