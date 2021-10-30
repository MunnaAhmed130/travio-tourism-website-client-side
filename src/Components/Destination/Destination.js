import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Destination.css'

const Destination = () => {
    return (
        <div className="destinations">
            <Container>
                <h2 className="mb-4">Choose Your <br /> <span >Destination</span></h2>
                <p className="w-50 m-auto pb-2">Our expert Travel Crafters design unique package trips to exciting destinations, with all the details covered to save you time and money. Enjoy unforgettable travel experiences at unbelievable prices.</p>
                <p className="mb-5">Find your Destination today!</p>
                <Row xs={1} md={3} className="g-5 mb-4">
                    <Col>
                        <div className="div1 div">
                            <h2>NetherLands</h2>
                        </div>
                        {/* <img className="destiny-img" src="https://i.ibb.co/WpMS1Ht/Netherland2.jpg" alt="" /> */}
                    </Col>
                    <Col>
                        <div className="div2 div">
                            <h2>Greece</h2>
                        </div>

                        {/* <img className="destiny-img" src="https://i.ibb.co/Xx0vbg0/greece2.jpg" alt="" /> */}
                    </Col>
                    <Col>
                        <div className="div3 div">
                            <h2>Rome</h2>
                        </div>

                        {/* <img className="destiny-img" src="https://i.ibb.co/7yJdP7Q/Zurich.jpg" alt="" /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;