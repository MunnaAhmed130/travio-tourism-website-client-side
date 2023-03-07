import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Destination.css";

// https://i.ibb.co/RzjrBC8/h2-bckg-img-05.png
// https://i.ibb.co/x1284PN/h2-img-01.png
// https://i.ibb.co/Gf6vL8m/h2-map-bg-imgb.png
// https://i.ibb.co/mc0Vcgq/landing-img-15.png

const Destination = () => {
    return (
        <section className="destinations">
            <Container fluid="lg" className="row__container">
                <Row lg="2">
                    <Col lg="6">
                        <div className="destination-info">
                            <h2 className="mb-4 text-dark">
                                Choose Your <br /> <span>Destination</span>
                            </h2>
                            <p className="pb-2 ">
                                Our expert Travel Crafters design unique package
                                trips to exciting destinations, with all the
                                details covered to save you time and money.
                                Enjoy unforgettable travel experiences at
                                unbelievable prices.
                            </p>
                            <p className=" ">Find your Destination today!</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <img
                            className=""
                            src="https://i.ibb.co/x1284PN/h2-img-01.png"
                            alt=""
                        />
                    </Col>
                </Row>

                {/* <Row lg={3} className="mb-5 row">
                    <Col xs={12} lg={4} className="div1 div mb-3">
                        <h2>NetherLands</h2>
                    </Col>
                    <Col xs={12} lg={4} className="div2 div mb-3">
                        <h2>Greece</h2>
                    </Col>
                    <Col xs={12} lg={4} className="div3 div mb-3">
                        <h2>Rome</h2>
                    </Col>
                </Row> */}
            </Container>
        </section>
    );
};

export default Destination;
