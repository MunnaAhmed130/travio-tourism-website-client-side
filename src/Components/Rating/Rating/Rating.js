import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { FaStarHalf } from "react-icons/fa";

const Rating = ({ count }) => {
    const [rating, setRating] = useState(count);
    useEffect(() => {
        setRating(rating);
    }, []);

    const empty = (
        (1 - (rating - Math.floor(rating)).toFixed(1)) *
        100
    ).toString();

    const broken = {
        position: "absolute",
        backgroundColor: "white",
        width: `${empty}%`,
        height: "100%",
        top: "0",
        right: "0",
        bottom: "0",
        zIndex: "8",
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.1;
                return (
                    <button type="button" key={index}>
                        {rating >= index + 1 ? (
                            <BsStarFill />
                        ) : rating >= number ? (
                            <span className="parent">
                                <BsStarHalf className="half-star"></BsStarHalf>
                                <BsStarFill className="child"></BsStarFill>
                                <span style={broken}></span>
                                <BsStar className="outline" />
                            </span>
                        ) : (
                            <BsStar />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default Rating;
