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
        <div className="tours-section py-5">
            <h2 className=" fw-bold  text-center">
                TRAVEL TO YOUR DESTINATION
            </h2>

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
