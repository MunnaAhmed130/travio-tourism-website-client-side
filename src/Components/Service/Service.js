import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RippleButton from "../Shared/RippleButton/RippleButton";
import { BsClock } from "react-icons/bs";
// import SetRating from "../Shared/Rating/SetRating";
// import Rating from "../Shared/Rating/Rating";
import "./Service.css";
import Rating from "../Shared/Rating/Rating";
import SetRating from "../Shared/Rating/SetRating";
import { useState } from "react";

const Service = ({ service }) => {
    const { img, _id, description, name, places, rating } = service;
    // const [value, setValue] = useState(1.5);
    // console.log(`value: ${value}`);
    const cardDescription = description.slice(0, 120);
    return (
        <Col className="mt-3 mt-sm-3">
            <Card className="tour-card border-0  shadow mx-auto overflow-hidden">
                <Card.Img
                    variant="top"
                    className="card-img rounded-0"
                    src={img}
                    loading="lazy"
                />
                <Card.Body>
                    <Card.Title className="title text-uppercase">
                        {name}
                    </Card.Title>
                    <div className="subtitle-container d-flex justify-content-between align-items-center mb-2 lh-1">
                        <h6 className="place ">{places}</h6>
                        <span className="time d-flex justify-content-end">
                            <BsClock className="me-1" />5 DAYS
                        </span>
                    </div>

                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <Rating count={rating} className="tour-rating" />
                        <span className="reviews ms-1">{rating}</span>
                    </div>

                    <Card.Text className="pt-2 description lh">
                        {cardDescription}...
                    </Card.Text>

                    <Link
                        to={`/placeOrder/${_id}`}
                        onClick={setTimeout(() => {}, 1)}
                        className="tour-btn__container"
                    >
                        <RippleButton className="tour-btn rounded-1  text-uppercase text-decoration-none ">
                            More Details
                        </RippleButton>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
