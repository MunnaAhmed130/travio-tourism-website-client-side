import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import "./Rating.css";

const Rating = ({ count, emptyColor, className, outlineColor }) => {
    const [rating, setRating] = useState(0);
    useEffect(() => {
        setRating(count);
    }, [count]);

    const fill = ((rating - Math.floor(rating)).toFixed(1) * 100).toString();

    const half = {
        width: `${fill}%`,
        height: "100%",
    };

    const empty = {
        color: `${emptyColor} `,
    };

    const outline = {
        color: `${outlineColor}`,
        zIndex: "30",
    };

    return (
        <div className="rating--star">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.1;
                return (
                    // star button here
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
                            <span>
                                {/* full rating  */}
                                {outlineColor ? (
                                    <span className="parent--star">
                                        <BsStarFill className="p-0 m-0 star-fill" />
                                        <BsStar
                                            className={"star-outline"}
                                            style={outlineColor && outline}
                                        />
                                    </span>
                                ) : (
                                    // here
                                    <BsStarFill className="p-0 m-0 " />
                                )}
                            </span>
                        ) : rating >= number ? (
                            <span className="parent--star">
                                {/* half star  */}
                                <span className="half" style={half}>
                                    <BsStarFill className="half--star" />
                                </span>
                                {/* empty star  */}
                                {emptyColor ? (
                                    <BsStarFill
                                        className="star--empty"
                                        style={empty}
                                    />
                                ) : (
                                    <BsStarFill className="star--empty" />
                                )}
                                {/* star outline  */}
                                <BsStar
                                    className={`${
                                        emptyColor ? emptyColor : ""
                                    } half-outline `}
                                    style={outlineColor && outline}
                                />
                            </span>
                        ) : (
                            <span>
                                {emptyColor ? (
                                    <span className="parent--star">
                                        <BsStarFill
                                            className="dummy--star"
                                            style={{
                                                color: ` ${emptyColor}`,
                                            }}
                                        />
                                        <BsStar
                                            className="star-outline"
                                            style={outlineColor && outline}
                                        />
                                    </span>
                                ) : (
                                    <span className="">
                                        <BsStar
                                            style={outlineColor && outline}
                                        />
                                    </span>
                                )}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default Rating;
