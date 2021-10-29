import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch(`http://localhost:4000/tour/${serviceId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>Your Orders</h2>
            <p>{serviceId}</p>
        </div>
    );
};

export default PlaceOrder;