import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import "./Rating.css";

const Rating = ({ count, emptyColor, className, outlineColor }) => {
    const [rating, setRating] = useState(count);
    useEffect(() => {
        setRating(rating);
    }, []);

    const full = ((rating - Math.floor(rating)).toFixed(1) * 100).toString();

    const hidden = {
        width: `${full}%`,
        height: "100%",
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
                                {outlineColor ? (
                                    <span className="parent--star">
                                        <BsStarFill className="p-0 m-0 star-fill" />
                                        <BsStar
                                            className={"star-outline"}
                                            style={outlineColor && outline}
                                        />
                                    </span>
                                ) : (
                                    <BsStarFill className="p-0 m-0 " />
                                )}
                            </span>
                        ) : rating >= number ? (
                            <span className="parent--star">
                                {emptyColor && (
                                    <BsStarFill
                                        className="dummy--star"
                                        style={{ color: `${emptyColor}` }}
                                    />
                                )}
                                <BsStar
                                    className={emptyColor && "outline"}
                                    style={outlineColor && outline}
                                />
                                <span className="hidden" style={hidden}>
                                    <BsStarFill className="hidden--star" />
                                </span>
                            </span>
                        ) : (
                            // <span className="parent--star">
                            //     {emptyColor && (
                            //         <BsStarFill
                            //             className="dummy--star"
                            //             style={{
                            //                 color: ` ${emptyColor}`,
                            //             }}
                            //         />
                            //     )}

                            //     <BsStar />
                            // </span>
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
                                    <BsStar style={outlineColor && outline} />
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
