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
        fetch(`https://polar-dusk-61914.herokuapp.com/tours/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            })
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://polar-dusk-61914.herokuapp.com/orders", data)
            .then(res => console.log(res))
        // .then(result => console.log(result))
    };
    return (
        <div className="" >
            <Container>
                <Row className="place-order" >
                    <Col className="col1" md={12} lg={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="">Your Name :</label>
                                <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                            </div>
                            <div>
                                <label htmlFor="">Your Email :</label>
                                <input {...register("email")} defaultValue={user.email} />
                            </div>
                            <div>
                                <label htmlFor="">Product Key :</label>
                            <input {...register("productKey")} defaultValue={serviceId} />
                            </div>

                            <div>
                                <label htmlFor="">Destination :</label>
                            <input {...register("place")} defaultValue={order.name} />
                            </div>
                            <div>
                                <label htmlFor="">Price :</label>
                                <input type="number" {...register("price")} value={order.price} />
                            </div>

                            {/* <input {...register("productId")} defaultValue={serviceId} /> */}
                            {/* <textarea {...register("description")} defaultValue={order.description} /> */}

                            {/* <Link to="/myOrder"><input className="btn btn-primary" type="submit" value="Place Order" /></Link> */}
                            <div>
                            <input className="btn btn-primary" type="submit" value="Place Order" />
                            </div>

                        </form>
                    </Col>
                    <Col md={12} lg={6}>
                        <img src={order.img} alt="" />
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default PlaceOrder;