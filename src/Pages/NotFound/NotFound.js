import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found d-flex flex-column justify-content-center align-items-center">
            <h2>WHOOPS… PAGE NOT FOUND</h2>
            <p>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
            </p>
        </div>
    );
};

export default NotFound;
