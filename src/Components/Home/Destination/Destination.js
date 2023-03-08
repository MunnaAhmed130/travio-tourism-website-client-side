import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Destination.css";

// https://i.ibb.co/RzjrBC8/h2-bckg-img-05.png
// https://i.ibb.co/x1284PN/h2-img-01.png
// https://i.ibb.co/Gf6vL8m/h2-map-bg-imgb.png
// https://i.ibb.co/mc0Vcgq/landing-img-15.png
// https://i.ibb.co/Vg8NjB8/139490452-3344136389024378-8699545123936856382-n.jpg
// https://ibb.co/pn0wZCZ
// https://ibb.co/RpFYTNY
// https://ibb.co/xYDSjKr
// https://ibb.co/FHTLcmP
// https://ibb.co/CQ6b0rg

const Destination = () => {
    return (
        <section className="destinations">
            <Container fluid="lg" className="row__container">
                <Row lg="2" className="g-4 mb-5 top-row">
                    <Col lg="6" className="d-flex align-items-center">
                        <div className="info-container ">
                            <h2 className="mb-4 text-dark">
                                Find Your Destination
                            </h2>
                            <p className="pb-2 ">
                                Our expert Travel Crafters design unique package
                                trips to exciting destinations, with all the
                                details covered to save you time and money.
                                Enjoy unforgettable travel experiences at
                                unbelievable prices.
                            </p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <img
                            className=""
                            src="https://i.ibb.co/9vC6BKM/h2-img-01-tiny.png"
                            alt=""
                            loading="lazy"
                        />
                    </Col>
                </Row>
                <Row lg="2" className="g-4 mb-5 bottom-row">
                    <Col className="bg-img">
                        <img
                            src="https://i.ibb.co/cXyPS26/landing-img-14-tiny.png"
                            alt=""
                            loading="lazy"
                        />
                    </Col>
                    <Col
                        lg="6"
                        className="d-flex align-items-center justify-content-end "
                    >
                        <div className="info-container ">
                            <h2 className="mb-4 text-dark">
                                {/* Choose Your <br /> <span>Destination</span> */}
                                Choose Your Destination
                            </h2>
                            <p className="pb-2 ">
                                Our expert Travel Crafters design unique package
                                trips to exciting destinations, with all the
                                details covered to save you time and money.
                                Enjoy unforgettable travel experiences at
                                unbelievable prices.
                            </p>
                            {/* <p className=" ">Find your Destination today!</p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Destination;
