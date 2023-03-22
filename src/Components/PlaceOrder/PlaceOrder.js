import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./PlaceOrder.css";
import UseAuth from "../../Hooks/UseAuth";
import { Container, Row, Col } from "react-bootstrap";

const PlaceOrder = () => {
    const { user } = UseAuth();
    console.log(user);
    const { serviceId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(
            `https://travel-related-website-server.vercel.app//tours/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => {
                setOrder(data);
                console.log(data);
            });
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post(
                "https://travel-related-website-server.vercel.app//orders",
                data
            )
            .then((res) => {
                console.log(res);

                if (res.data.insertedId) {
                    alert("order successfully placed");
                }
            });
    };
    return (
        <div>
            <Container>
                <h2 className="text-black my-4">Place My Order</h2>
                <Row className="place-order">
                    <Col className="col1" md={12} lg={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="">Your Name :</label>
                                <input
                                    {...register("name", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                    defaultValue={user.displayName}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="">Your Email :</label>
                                <input
                                    {...register("email")}
                                    defaultValue={user.email}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor=""> Address :</label>
                                <input
                                    {...register("address")}
                                    required="require"
                                />
                            </div>
                            <div>
                                <label htmlFor="">Phone :</label>
                                <input
                                    type="tel"
                                    {...register("Phone")}
                                    required="require"
                                />
                            </div>
                            <div>
                                <label htmlFor="">Product Key :</label>
                                <input
                                    {...register("productKey")}
                                    defaultValue={serviceId}
                                    required="require"
                                />
                            </div>

                            <div>
                                <label htmlFor="">Destination :</label>
                                <input
                                    {...register("place")}
                                    defaultValue={order?.name}
                                    required="require"
                                />
                            </div>
                            <div>
                                <label htmlFor="">Price :</label>
                                <input
                                    type="number"
                                    {...register("price")}
                                    defaultValue={order?.price}
                                    required="require"
                                />
                            </div>

                            <div>
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Place Order"
                                />
                            </div>
                        </form>
                    </Col>
                    <Col md={12} lg={6}>
                        <img
                            className="img-fluid order-img"
                            src={order.img}
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;
