import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
// import tourPlan from "fakedata";
import Service from "../../Service/Service";
import SkeletonProduct from "../../Skeletons/SkeletonProduct";
import "./TourPlans.css";

const TourPlans = () => {
    const [plans, setPlans] = useState([]);
    const limit = 3;
    const limitArray = [1, 2, 3];

    useEffect(() => {
        // fetch("fakedata.json")
        fetch(`http://localhost:4000/tours/query?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setPlans(data));
    }, []);

    return (
        <section className="tours-section overflow-hidden position-relative">
            <h2 className="fw-bold text-center py-sm-4 py-0 position-relative">
                TRAVEL TO YOUR DESTINATION
            </h2>

            {plans.length === 0 ? (
                <Container fluid="md">
                    <Row xs={1} sm={1} md={2} lg={3} className="g-4 m-1">
                        {limitArray.map((n) => (
                            <SkeletonProduct key={n}></SkeletonProduct>
                        ))}
                    </Row>
                </Container>
            ) : (
                <Container fluid="lg" className="px-3">
                    <Row xs={1} sm={2} md={2} lg={3} className="g-4 my-1">
                        {plans.map((plan) => (
                            <Service key={plan._id} service={plan}></Service>
                        ))}
                    </Row>
                </Container>
            )}
        </section>
    );
};

export default TourPlans;
