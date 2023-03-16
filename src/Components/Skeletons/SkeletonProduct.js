import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Shimmer from "./Shimmer";
// importing SkeletonElements gives access to Skeletons.css
// so there is no need to import Skeleton.css so just
import SkeletonElements from "./SkeletonElements";

const SkeletonProduct = () => {
    return (
        <Col className="col--skeleton">
            <Card className="product--skeleton ">
                <SkeletonElements type="img" />
                <Card.Body>
                    <SkeletonElements
                        type="title "
                        style={{ height: "35px" }}
                    />
                    <div className="d-flex flex-row justify-content-between">
                        <SkeletonElements
                            type="text w-25 "
                            style={{ height: "20px" }}
                        />
                        <SkeletonElements
                            type="text w-25"
                            style={{ height: "20px" }}
                        />
                    </div>
                    <div className="d-flex justify-content-start align-items-center lh-1">
                        <SkeletonElements type="text w-50" />
                    </div>
                    <SkeletonElements type="text w-100" />
                    <SkeletonElements type="text w-100" />
                    <div className=" text-center">
                        <SkeletonElements type="button" />
                    </div>
                </Card.Body>
                <Shimmer></Shimmer>
            </Card>
        </Col>
    );
};

export default SkeletonProduct;
