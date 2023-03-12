import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RippleButton from "../RippleButton/RippleButton";
import { BsClock } from "react-icons/bs";
import "./Service.css";
import SetRating from "../Rating/SetRating/SetRating";
import Rating from "../Rating/Rating/Rating";

const Service = ({ service }) => {
    const { img, _id, description, name, places, rating } = service;
    // const rating = 3.6;
    // var viewportWidth;
    // =    window.innerWidth || document.documentElement.clientWidth;
    // var limit;

    // const onResize = () => {
    //     viewportWidth = window.innerWidth;
    //     viewportWidth >= 1200 ? (limit = 140) : (limit = 100);
    //     console.log(viewportWidth, limit);
    // };

    // onResize();
    // window.onresize = onResize();
    // console.log(viewportWidth, limit);
    const cardDescription = description.slice(0, 70);
    return (
        <Col>
            <Card className="tour-card">
                <Card.Img
                    variant="top"
                    className="card-img"
                    src={img}
                    loading="lazy"
                />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center mb-2 lh-1">
                        <h6 className="place ">{places}</h6>
                        <span className="time">
                            <BsClock className="me-1" />5 days
                        </span>
                    </div>
                    <div className="d-flex justify-content-start align-items-center lh-1">
                        <Rating count={rating} className="tour-rating" />
                        <span className="">({rating})</span>
                        <span className="reviews">
                            <a href="/">Reviews</a>
                        </span>
                    </div>

                    <Card.Text className="pt-2">{cardDescription}...</Card.Text>

                    <Link
                        to={`/placeOrder/${_id}`}
                        onClick={setTimeout(() => {}, 1)}
                        className="tour-btn__container"
                    >
                        <RippleButton className="tour-btn rounded-1 text-white text-uppercase text-decoration-none">
                            More Details
                        </RippleButton>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
