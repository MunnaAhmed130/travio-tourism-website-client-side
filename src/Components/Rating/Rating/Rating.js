import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
// import { FaStarHalf } from "react-icons/fa";
import "../SetRating/Rating.css";

const Rating = ({ count, emptyColor }) => {
    const [rating, setRating] = useState(2.4);
    useEffect(() => {
        setRating(rating);
    }, []);

    const empty = (
        (1 - (rating - Math.floor(rating)).toFixed(1)) *
        100
    ).toString();

    const broken = {
        position: "absolute",
        backgroundColor: `${emptyColor || "white"} `,
        // color: "red",
        width: `${empty}%`,
        height: "100%",
        top: "0",
        right: "0",
        bottom: "0",
        zIndex: "8",
    };

    return (
        <div className="rating--star">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.1;
                return (
                    <button type="button" key={index} className="star-button">
                        {rating >= index + 1 ? (
                            <BsStarFill />
                        ) : rating >= number ? (
                            <span className="parent--star">
                                <BsStarHalf className="half-star" />
                                <BsStarFill className="child--star" />
                                <span style={broken} />
                                <BsStar className="outline" />
                                {/* <BsStarFill className="hidden--star" /> */}
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

// {<span className="parent--star">
// <BsStarHalf className="half-star">
//     <BsStarFill className="child--star"></BsStarFill>
//     <span style={broken}></span>
//     <BsStar className="outline" />
// </BsStarHalf>
// {/* <BsStarFill className="child--star"></BsStarFill> */}
// {/* <span style={broken}></span>
// <BsStar className="outline" /> */}
// {/* <BsStarFill className="hidden--star" /> */}
// </span>}
