import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";
import "./TourPlans.css";

const TourPlans = () => {
    const [plans, setPlans] = useState([]);
    const limit = 3;
    useEffect(() => {
        fetch(`http://localhost:4000/tours/query?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setPlans(data));
    }, []);

    return (
        <>
            <section className="tours-section">
                <h2 className=" fw-bold  text-center">
                    TRAVEL TO YOUR DESTINATION
                </h2>

                {plans.length === 0 ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    <Container fluid="md">
                        <Row xs={1} sm={1} md={2} lg={3} className="g-4 m-4">
                            {plans.map((plan) => (
                                <Service
                                    key={plan._id}
                                    service={plan}
                                ></Service>
                            ))}
                        </Row>
                    </Container>
                )}
            </section>
            {/* <img
                className="tours-btm-img"
                src="https://i.ibb.co/NFDM48Y/h5-bckg-img-02.jpg"
                alt=""
            /> */}
        </>
    );
};

export default TourPlans;
