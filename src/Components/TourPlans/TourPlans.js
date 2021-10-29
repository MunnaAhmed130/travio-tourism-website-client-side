import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const TourPlans = () => {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/tour')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])
    console.log(plans)
    return (
        <div>
            <h2>TourPlans</h2>

            <Row xs={1} md={3} className="g-4 m-5">
                {
                    plans.map(plan => <Service key={plan._id} service={plan}></Service>)
                }
            </Row>
        </div>
    );
};

export default TourPlans;