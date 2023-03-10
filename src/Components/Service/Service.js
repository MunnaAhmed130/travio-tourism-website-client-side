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
    const cardDescription = description.slice(0, 140);
    return (
        // <div>
        // <Col sm={12} md={6}>
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
                    <div className="d-flex justify-content-between mb-1">
                        <h6 className="place mb-1">{places}</h6>
                        <span className="mb-1">
                            <BsClock />5 days
                        </span>
                    </div>
                    <SetRating className="new-rating" emptyStar="black" />
                    <Rating count={rating} />
                    {/* <Card.Text className="pt-1">{cardDescription}...</Card.Text> */}
                    {/* <Link to={`/placeOrder/${_id}`}> 
                    <RippleButton className="border border-secondery-subtle py-1 rounded">
                        Buy Now
                    </RippleButton>
                    </Link> */}
                    {/* <Link
                        to={`/placeOrder/${_id}`}
                        onClick={setTimeout(() => {}, 1)}
                    > */}
                    <RippleButton className=" rounded-1 text-white text-uppercase text-decoration-none">
                        More Details
                    </RippleButton>
                    {/* </Link> */}
                </Card.Body>
            </Card>
        </Col>
        // </div>
    );
};

export default Service;
