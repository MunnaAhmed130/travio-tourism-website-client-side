import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import TourPlans from '../TourPlans/TourPlans';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPlans></TourPlans>
            <Destination></Destination>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h2>Subscribe Now and Quench Your Wonderlust</h2>
                        </Col>
                        <Col>
                            <button>Join Us Now</button>
                        </Col>
                    </Row>
                </Container>

            </section>
        </div>
    );
};

export default Home;