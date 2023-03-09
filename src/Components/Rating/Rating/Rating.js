import React, { useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

const Rating = ({ count }) => {
    const [rating, setRating] = useState(count);
    const starCount = 3.4;
    const sCount = (
        (1 - (starCount - Math.floor(starCount)).toFixed(1)) *
        100
    ).toString();
    console.log(sCount);

    const broken = {
        // content: "\2605",
        position: "absolute",
        backgroundColor: "red",
        // color: "red",
        width: `${sCount}%`,
        height: "100%",
        top: "0",
        right: "0",
    };
    console.log({ broken });
    // setRating(count);
    // const [hover, setHover] = useState(0);
    // console.log([...Array(5)]);s
    // console.log(rating, hover);
    // console.log(count);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.1;
                return (
                    // <button type="button" key={index}>
                    //     {count >= index + 1 ? (
                    //         <BsStarFill />
                    //     ) : count >= number ? (
                    //         <BsStarHalf />
                    //     ) : (
                    //         <BsStar />
                    //     )}
                    // </button>
                    <button type="button" key={index}>
                        {starCount >= index + 1 ? (
                            <span className="star on">&#9733;</span>
                        ) : starCount >= number ? (
                            <span className="star half">
                                &#9733;
                                <span
                                    // style={{ ...broken }}
                                    className="broken"
                                ></span>
                            </span>
                        ) : (
                            <span className="star off">&#9733;</span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default Rating;
