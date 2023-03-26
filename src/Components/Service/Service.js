import React from "react";
import { Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsClock, BsArrowRight } from "react-icons/bs";
// import Rating from "../Shared/Rating/Rating";
import Rating from "../Shared/Rating/Rating";
import "./Service.css";
// import SetRating from "../Shared/Rating/SetRating";

const Service = ({ service }) => {
    const { img, _id, description, name, places, rating } = service;
    // const [value, setValue] = useState(1.5);
    // console.log(`value: ${value}`);
    const cardDescription = description.slice(0, 70);

    return (
        <Col className="mt-3 mt-sm-3">
            <Card
                className="tour-card border-0 mx-auto overflow-hidden d-flex flex-row align-items-end"
                style={{ backgroundImage: `url(${img}) ` }}
            >
                {/* <span className="card-tag text-uppercase">Most Popular</span> */}
                <OverlayTrigger
                    overlay={<Tooltip id="tooltip">add to wishlist</Tooltip>}
                >
                    <button className="wishlist border-0">
                        <svg
                            // fill="#00005"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                            </g>
                        </svg>
                    </button>
                </OverlayTrigger>

                {/* <img
                    variant="top"
                    className="card-img rounded-0"
                    src={img}
                    alt=""
                    loading="lazy"
                /> */}

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

                    <div className=" d-flex flex-row justify-content-between align-items-center">
                        <Rating
                            count={rating}
                            // outlineColor="red"
                            // emptyColor="yellowgreen"
                            // emptyColor is not a must attribute anymore default is white
                            className="tour-rating"
                        />
                        <span className="reviews ms-1 d-flex align-items-center">
                            {rating} out of 5
                            {/* <BsStarFill className="star-icon ms-1" /> */}
                        </span>
                    </div>
                    {/* <SetRating value={value} setValue={setValue} /> */}

                    <Card.Text className="pt-2 description ">
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
                        <button className="tour-btn border-0 bg-transparent p-0 fw-semibold text-uppercase">
                            More Details <BsArrowRight />
                        </button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
