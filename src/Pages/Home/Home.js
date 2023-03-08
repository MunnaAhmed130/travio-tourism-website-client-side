import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../Components/Home/Banner/Banner";
import Destination from "../../Components/Home/Destination/Destination";
import MidBanner from "../../Components/Home/MidBanner/MidBanner";
import Newsletter from "../../Components/Home/Newsletter/Newsletter";
import TourPlans from "../../Components/TourPlans/TourPlans";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Banner />
            <TourPlans />
            <MidBanner />
            <Destination />
            <Newsletter />
        </>
    );
};

export default Home;
