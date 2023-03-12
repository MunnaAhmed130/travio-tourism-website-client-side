import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Shimmer from "./Shimmer";
// importing SkeletonElements gives access to Skeletons.css
// so there is no need to import Skeleton.css so just
import SkeletonElements from "./SkeletonElements";

const SkeletonProduct = () => {
    return (
        <Col className=" col--skeleton ">
            <Card className="product--skeleton ">
                <SkeletonElements type="img" />
                <Card.Body>
                    <SkeletonElements
                        type="title "
                        style={{ height: "30px" }}
                    />
                    <div className="d-flex justify-content-between align-items-center mb-2 lh-1">
                        <SkeletonElements type="text" className="" />
                        <SkeletonElements type="text" className="w-25" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center lh-1">
                        <SkeletonElements type="text" className="w-25" />
                        <SkeletonElements type="text" className="w-25" />
                    </div>
                    <SkeletonElements type="text" className="w-25" />
                    <SkeletonElements type="text" className="w-25" />
                    <SkeletonElements type="text" className="w-25" />

                    <SkeletonElements type="btn" />
                </Card.Body>
                <Shimmer></Shimmer>
            </Card>
        </Col>
    );
};

export default SkeletonProduct;
