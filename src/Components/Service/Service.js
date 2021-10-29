import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Service.css'

const Service = ({ service }) => {
    const { img, _id, description, name } = service;
    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Link to={`/placeOrder/${_id}`}><Button variant="primary">Buy Now</Button></Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;