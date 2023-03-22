import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsClock, BsArrowRight } from "react-icons/bs";
// import SetRating from "../Shared/Rating/SetRating";
// import Rating from "../Shared/Rating/Rating";
import Rating from "../Shared/Rating/Rating";
import "./Service.css";
import SetRating from "../Shared/Rating/SetRating";

const Service = ({ service }) => {
    const { img, _id, description, name, places, rating } = service;
    const [value, setValue] = useState(1.5);
    console.log(`value: ${value}`);
    const cardDescription = description.slice(0, 60);
    return (
        <Col className="mt-3 mt-sm-3">
            <Card
                className="tour-card border-0 mx-auto overflow-hidden d-flex align-items-end "
                style={{ backgroundImage: `url(${img})` }}
            >
                {/* <Card.Img
                    variant="top"
                    className="card-img rounded-0"
                    src={img}
                    loading="lazy"
                /> */}
                <div className="d-flex align-items-end flex-row">
                    <Card.Body className="">
                        <Card.Title className="title text-uppercase">
                            {name}
                        </Card.Title>
                        <div className="subtitle-container d-flex justify-content-between align-items-center mb-2 lh-1">
                            <h6 className="place ">{places}</h6>
                            <span className="time d-flex justify-content-end">
                                <BsClock className="me-1 icon" />5 DAYS
                            </span>
                        </div>

                        <div className="d-flex flex-row justify-content-start align-items-center">
                            <Rating
                                count={rating}
                                // outlineColor="red"
                                // emptyColor="pink"
                                // emptyColor is not a must attribute anymore default is white
                                className="tour-rating"
                            />
                            <span className="reviews ms-1">{rating}</span>
                        </div>
                        {/* <SetRating value={value} setValue={setValue} /> */}

                        <Card.Text className="pt-3 description ">
                            {cardDescription}...
                        </Card.Text>

                        <Link
                            to={`/placeOrder/${_id}`}
                            onClick={setTimeout(() => {}, 1)}
                            className="tour-btn--container text-decoration-none"
                        >
                            {/* <RippleButton className="tour-btn rounded-1  text-uppercase text-decoration-none ">
                            More Details
                        </RippleButton> */}
                            <button className="tour-btn border-0 bg-transparent p-0 fw-medium">
                                More Details <BsArrowRight />
                            </button>
                        </Link>
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
};

export default Service;
