import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-bottom">
                <Container >
                    <Row >
                        <Col className='text-start'>Travio &copy; 2021 All Right Reserved</Col>
                        <Col className='text-end'>Terms of Service | Privacy Policy</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
