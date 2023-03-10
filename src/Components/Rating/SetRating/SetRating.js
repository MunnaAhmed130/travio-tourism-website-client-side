import React, { useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import "./Rating.css";

const SetRating = ({ className, emptyStar }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const color = {
        color: "#d17e7b",
    };
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
                    >
                        {(rating || hover) >= index + 1 ? (
                            <BsStarFill className={className} />
                        ) : (rating || hover) >= number ? (
                            <BsStarHalf className={className} />
                        ) : (
                            <span className="parent">
                                <BsStar
                                    className={`${className} position-relative`}
                                />
                                <BsStarFill
                                    style={color}
                                    className={` child`}
                                />
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default SetRating;
