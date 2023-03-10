import React, { useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

import "./Rating.css";

const SetRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // const both = (hover && rating) || rating;
    // const both = hover || (rating && hover);
    // const both = rating || (hover && rating);
    // const both = hover || rating;
    const both = rating || hover;

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.5;
                return (
                    <button
                        type="button"
                        key={index}
                        onClick={() => setRating(hover)}
                        onMouseOver={(e) => {
                            const rect = e.target.getBoundingClientRect();
                            e.clientX - rect.left < 10
                                ? setHover(index + 0.5)
                                : setHover(index + 1);
                        }}
                        onMouseOut={() => setHover(rating)}
                        // onMouseLeave={() => {
                        //     setHover(index);
                        // }}
                        className="rating"
                    >
                        {both >= index + 1 ? (
                            <BsStarFill />
                        ) : both >= number ? (
                            <BsStarHalf />
                        ) : (
                            <BsStar />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default SetRating;
