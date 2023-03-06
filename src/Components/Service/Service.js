import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RippleButton from "../RippleButton/RippleButton";
import "./Service.css";

const Service = ({ service }) => {
    const { img, _id, description, name, places } = service;
    const cardDescription = description.slice(0, 150);
    return (
        // <div>
        <Col>
            <Card className="tour-card">
                <Card.Img variant="top" className="card-img" src={img} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <h6 className="place">{places}</h6>
                    <Card.Text className="pt-1">{cardDescription}...</Card.Text>
                    {/* <Link to={`/placeOrder/${_id}`}> 
                    <RippleButton className="border border-secondery-subtle py-1 rounded">
                        Buy Now
                    </RippleButton>
                    </Link> */}
                    <Link
                        to={`/placeOrder/${_id}`}
                        onClick={setTimeout(() => {}, 1)}
                        // className="border border-secondery-subtle py-1 rounded"
                    >
                        <RippleButton className="border border-secondery-subtle py-1 px-2 rounded-1 bg-primary bg-gradient text-white text-uppercase">
                            Buy Now
                        </RippleButton>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
        // </div>
    );
};

export default Service;
