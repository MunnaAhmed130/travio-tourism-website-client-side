import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import UseAuth from '../../Hooks/UseAuth';
import { Container, Row, Col } from 'react-bootstrap';

const PlaceOrder = () => {
    const { user } = UseAuth();
    console.log(user);
    const { serviceId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://polar-dusk-61914.herokuapp.com/tours/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="place-order">
            <Container>
                <Row>
                    <Col><form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">User Name:</label>
                        <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                        <input {...register("email")} value={user.email} />
                        <textarea {...register("description")} value={order.description} />
                        <input type="number" {...register("price")} value={order.price} />
                        <input className="btn btn-primary" type="submit" value="Place Order" />
                    </form>
                    </Col>
                    <Col>
                        <img src={order.img} alt="" />
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default PlaceOrder;