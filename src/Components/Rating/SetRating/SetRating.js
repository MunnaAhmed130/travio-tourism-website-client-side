import React, { useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import "./Rating.css";

const SetRating = ({ className, emptyStar }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    // console.log(`rating: ${rating}, hover: ${hover}`);
    const color = {
        color: "#d17e7b",
    };
    // const condition = rating || hover;
    const condition = hover;

    return (
        <div className="set_rating--star">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.5;
                return (
                    <button
                        type="button"
                        className="star-button"
                        key={index}
                        onClick={() => setRating(hover)}
                        onMouseOver={(e) => {
                            const rect = e.target.getBoundingClientRect();
                            e.clientX - rect.left < 5
                                ? setHover(index + 0.5)
                                : setHover(index + 1);
                        }}
                        onMouseOut={() => setHover(rating)}
                        onMouseLeave={() => {
                            setHover(rating);
                        }}
                    >
                        {condition >= index + 1 ? (
                            <BsStarFill className={className} />
                        ) : condition >= number ? (
                            // <span className="parent">
                            <BsStarHalf className={`${className}  half-star`}>
                                <BsStarFill className="child" />
                            </BsStarHalf>
                        ) : (
                            // </span>
                            <BsStar />
                            // <span className="parent">
                            // <BsStarFill></BsStarFill>
                            // <BsStar
                            //    className={`${className} position-relative`}
                            //    />
                            //    <BsStarFill
                            //    style={color}
                            //    className={` child`}
                            //    /> *
                            //    </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default SetRating;
