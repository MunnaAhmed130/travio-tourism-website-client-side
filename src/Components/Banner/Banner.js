import React from "react";
import "./Banner.css";

import { Carousel } from "react-bootstrap";
// Travel and find happiness within
// yourself.
// const height = { height: "100vh" };
const Banner = () => {
    const intervalCount = 1000;
    return (
        <div className="banner">
            <Carousel fade>
                <Carousel.Item interval={intervalCount}>
                    <img
                        className="img img1 d-block w-100"
                        variant="top"
                        src="https://i.ibb.co/gFPGw3F/Paris2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="caption__container">
                            <h4>FRANCE</h4>
                            <h3>PARIS</h3>
                            <p className="banner-info">
                                Experience holidays in Paris and find the best
                                time to go and the best places to visit. Famous
                                monuments, Shopping avenue, Arts, Louvre
                                museums, Seine and Cuisine.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={intervalCount}>
                    <img
                        className="img img2 d-block w-100"
                        src="https://i.ibb.co/X5cshjc/italy2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h4>ITALY</h4>
                            <h3>VENEZIA</h3>
                            <p className="banner-info">
                                In Italy you'll find sunny isles, glacial lakes
                                and fiery volcanoes, rolling vineyards and urban
                                landscapes harbouring more UNESCO World Heritage
                                sites.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={intervalCount}>
                    <img
                        className="img img3 d-block w-100"
                        src="https://i.ibb.co/HdNG7gw/Zurich.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h4>SWITZERLAND</h4>
                            <h3>ZURICH</h3>
                            <p className="banner-info">
                                The amazing mountains, heaps of lakes and
                                quaint, quiet streets set against an Alpine
                                backdrop beautiful villages make for the most
                                beautiful scenery in Switzerland.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <img
                className="btm-img"
                src="https://i.ibb.co/H74JPDf/h1-rev-bottom.png"
                alt=""
            />
        </div>
    );
};

export default Banner;
