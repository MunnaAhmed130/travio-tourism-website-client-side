import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import UseAuth from '../../Hooks/UseAuth';
import { Container, Row, Col } from 'react-bootstrap';
import Service from '../Service/Service';

const PlaceOrder = () => {
    const { user } = UseAuth();
    console.log(user);
    const { serviceId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/tours/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            })
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("http://localhost:4000/orders", data)
            .then(res => console.log(res))
        // .then(result => console.log(result))
    };
    return (
        <div >
            <Container>
                <Row className="place-order" >
                    <Col className="col1" md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="">User Name:</label>
                                <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                            </div>
                            <input {...register("email")} defaultValue={user.email} />
                            <input {...register("productKey")} defaultValue={serviceId} />
                            <input {...register("place")} defaultValue={order.name} />
                            {/* <input {...register("productId")} defaultValue={serviceId} /> */}
                            {/* <textarea {...register("description")} defaultValue={order.description} /> */}
                            <input type="number" {...register("price")} value={order.price} />
                            {/* <Link to="/myOrder"><input className="btn btn-primary" type="submit" value="Place Order" /></Link> */}
                            <input className="btn btn-primary" type="submit" value="Place Order" />
                        </form>
                    </Col>
                    <Col md={6}>
                        <img src={order.img} alt="" />
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default PlaceOrder;