import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Destination.css'

const Destination = () => {
    return (
        <div className="destinations">

            <Container >
                <h2 className="mb-4">Choose Your <br /> <span >Destination</span></h2>
                <p className="w-50 m-auto pb-2">Our expert Travel Crafters design unique package trips to exciting destinations, with all the details covered to save you time and money. Enjoy unforgettable travel experiences at unbelievable prices.</p>
                <p className="mb-5">Find your Destination today!</p>
                <Row lg={3} className="mb-5 row">
                    <Col xs={12} lg={4} className="div1 div mb-3">

                            <h2>NetherLands</h2>

                    </Col>
                    <Col xs={12} lg={4} className="div2 div mb-3">

                            <h2>Greece</h2>



                    </Col>
                    <Col xs={12} lg={4} className="div3 div mb-3">

                            <h2>Rome</h2>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;