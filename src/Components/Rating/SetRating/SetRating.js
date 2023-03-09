import React, { useState } from "react";
import "./Rating.css";

const SetRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    console.log(hover, rating);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                let number = index + 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={
                            index <= ((hover && rating) || rating)
                                ? "on"
                                : "off"
                        }
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                        {/* {starCount >= index + 1 ? (
                            <span className="star on">&#9733;</span>
                        ) : starCount >= number ? (
                            <span className="half">
                                &#9733;
                                <span className="before"></span>
                            </span>
                        ) : (
                            <span className="star off">&#9733;</span>
                        )} */}
                    </button>
                );
            })}
        </div>
    );
};

export default SetRating;
