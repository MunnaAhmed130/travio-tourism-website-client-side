import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import "./Rating.css";

const Rating = ({ count, emptyColor, className }) => {
    const [rating, setRating] = useState(count);
    useEffect(() => {
        setRating(rating);
    }, []);

    const full = ((rating - Math.floor(rating)).toFixed(1) * 100).toString();

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
                            <BsStarFill className="p-0 m-0" />
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
