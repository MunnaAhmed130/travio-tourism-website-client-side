import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const TourPlans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch("https://travio-tourism-website-server-side.vercel.app/tours")
            .then((res) => res.json())
            .then((data) => setPlans(data));
    }, []);

    return (
        <div>
            <h2 className="fs-1 fw-bold mt-5 text-dark">TourPlans</h2>

            {plans.length === 0 ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4 m-4">
                    {plans.map((plan) => (
                        <Service key={plan._id} service={plan}></Service>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default TourPlans;
