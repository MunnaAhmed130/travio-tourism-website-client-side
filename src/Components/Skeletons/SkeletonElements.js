import React from "react";
import "./Skeletons.css";

const SkeletonElements = ({ type, style }) => {
    const classes = `skeleton ${type}`;

    return <div className={classes} style={style}></div>;
};

export default SkeletonElements;
