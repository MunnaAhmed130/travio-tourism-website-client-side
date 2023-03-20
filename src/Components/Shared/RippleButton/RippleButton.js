import React, { useEffect, useState } from "react";
import "./RippleButton.css";

const RippleButton = ({ children, onClick, className, type, disabled }) => {
    const value = 0;
    // const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 });
    const [coords, setCoords] = useState({ x: value, y: value });
    const [isRippling, setIsRippling] = useState(false);
    // console.log(localCoords);

    // const handleMouseMove = (event) => {
    //     setLocalCoords({
    //         x: event.clientX - event.target.offsetLeft,
    //         y: event.clientY - event.target.offsetTop,
    //     });
    // };

    useEffect(() => {
        if (coords.x !== value && coords.y !== value) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: value, y: value });
    }, [isRippling]);

    return (
        <button
            // className="ripple-button"
            className={`ripple-button ${className}`}
            type={`${type}`}
            onClick={(e) => {
                // e.preventDefault();
                const rect = e.target.getBoundingClientRect();
                setCoords({
                    x: e.clientX - rect.left - 10,
                    y: e.clientY - rect.top - 10,
                });

                onClick && onClick(e);
            }}
            // onMouseMove={handleMouseMove}
            disabled={disabled}
        >
            {isRippling ? (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y,
                    }}
                />
            ) : (
                ""
            )}
            <span className="content">{children}</span>
        </button>
    );
};

export default RippleButton;
