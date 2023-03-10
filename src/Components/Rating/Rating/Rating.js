import React, { useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

const Rating = ({ count }) => {
    // const [rating, setRating] = useState(count);
    // console.log(rating);
    const rating = 4.6;
    // const starCount = 3.6;
    // const sCount = (
    //     (1 - (starCount - Math.floor(starCount)).toFixed(1)) *
    //     100
    // ).toString();
    // console.log(sCount);

    // const broken = {
    //     // content: "",
    //     // content: "\2605",
    //     position: "absolute",
    //     backgroundColor: " #ccc",
    //     // color: "red",
    //     // width: `${sCount}%`,
    //     height: "100%",
    //     top: "0",
    //     right: "0",
    //     zIndex: "5",
    // };
    // console.log({ broken });

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.5;
                return (
                    <button type="button" key={index}>
                        {rating >= index + 1 ? (
                            <BsStarFill />
                        ) : rating >= number ? (
                            <span className="parent">
                                <BsStarHalf></BsStarHalf>
                                <BsStarHalf className="child"></BsStarHalf>
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
