import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
// import { FaStarHalf } from "react-icons/fa";
import "../SetRating/Rating.css";

const Rating = ({ count, emptyColor, className }) => {
    const [rating, setRating] = useState(count);
    useEffect(() => {
        setRating(rating);
    }, []);

    // const empty = (
    //     (1 - (rating - Math.floor(rating)).toFixed(1)) *
    //     100
    // ).toString();

    const full = ((rating - Math.floor(rating)).toFixed(1) * 100).toString();
    // console.log(full);
    // const broken = {
    //     position: "absolute",
    //     backgroundColor: `${emptyColor || "white"} `,
    //     width: `${empty}%`,
    //     height: "100%",
    //     top: "0",
    //     right: "0",
    //     bottom: "0",
    //     zIndex: "8",
    // };

    const hidden = {
        width: `${full}%`,
        height: "100%",
    };

    return (
        <div className="rating--star">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={
                            className
                                ? `${className} star-button `
                                : "star-button "
                        }
                    >
                        {rating >= index + 1 ? (
                            <BsStarFill />
                        ) : rating >= number ? (
                            <span className="parent--star">
                                {emptyColor && (
                                    <BsStarFill
                                        className="dummy--star"
                                        style={{ color: `${emptyColor}` }}
                                    />
                                )}
                                <BsStar className={emptyColor && "outline"} />
                                <span className="hidden" style={hidden}>
                                    <BsStarFill className="hidden--star" />
                                </span>
                            </span>
                        ) : (
                            <span className="parent--star">
                                {emptyColor && (
                                    <BsStarFill
                                        className="dummy--star"
                                        style={{
                                            color: ` ${emptyColor}`,
                                        }}
                                    />
                                )}
                                <BsStar />
                            </span>
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
