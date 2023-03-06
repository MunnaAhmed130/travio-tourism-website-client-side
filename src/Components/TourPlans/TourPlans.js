import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";
import "./TourPlans.css";

const TourPlans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/tours")
            .then((res) => res.json())
            .then((data) => setPlans(data));
    }, []);

    return (
        <div className="tours-section">
            <h2 className="fs-1 fw-bold mt-5">TourPlans</h2>

            {plans.length === 0 ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4 m-4">
                        {plans.map((plan) => (
                            <Service key={plan._id} service={plan}></Service>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default TourPlans;
