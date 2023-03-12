import React from "react";
import Shimmer from "./Shimmer";
// importing SkeletonElements gives access to Skeletons.css
// so there is no need to import Skeleton.css so just
import SkeletonElements from "./SkeletonElements";

const SkeletonProduct = () => {
    return (
        <div className={` col--skeleton col `}>
            <div className="product--skeleton ">
                <SkeletonElements type="img" />
                <div className="card-body">
                    <SkeletonElements
                        type="title "
                        style={{ height: "30px" }}
                    />
                    <div className="d-flex flex-col">
                        <SkeletonElements type="text" className="" />
                        <SkeletonElements type="text" className="w-25" />
                    </div>
                    <SkeletonElements type="text" />
                    <SkeletonElements type="btn" />
                </div>

                <Shimmer></Shimmer>
            </div>
        </div>
    );
};

export default SkeletonProduct;
