import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RippleButton from "../RippleButton/RippleButton";
import { BsClock } from "react-icons/bs";
import SetRating from "../Rating/SetRating/SetRating";
import Rating from "../Rating/Rating/Rating";
import "./Service.css";

const Service = ({ service }) => {
    const { img, _id, description, name, places, rating } = service;

    const cardDescription = description.slice(0, 70);
    return (
        <Col className="">
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
                    <div className="d-flex justify-content-start align-items-end lh-1">
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
                        <RippleButton className="tour-btn rounded-1  text-uppercase text-decoration-none">
                            More Details
                        </RippleButton>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
