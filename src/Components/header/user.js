import React from "react";
import { Dropdown } from "react-bootstrap";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { MdOutlineDashboard, MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import RippleButton from "../Shared/RippleButton/RippleButton";

const User = () => {
    const { user, handleLogOut } = UseAuth();
    let name = user.displayName;
    let userName = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
    );
    // capitalize first letter of each word
    const logOut = () => {
        setTimeout(handleLogOut, 1000);
    };
    return (
        <Dropdown id="user_card" className="user_dropdown ">
            <Dropdown.Toggle
                // id="dropdown-basic"
                className="p-0 user_dropdown--toggle border-0"
            >
                {user.photoURL ? (
                    <img
                        className="profile "
                        src={user.photoURL}
                        alt="profile-pic"
                    />
                ) : (
                    <img
                        className="default-profile-img "
                        //    src="https://i.ibb.co/GCxxYjQ/Pngtree-blue-default-avatar-small0.png"

                        src="https://i.ibb.co/QvyFpsc/default-avatar-profile-icon-vector-social-media-user-image.jpg"
                        alt="profile-pic"
                    />
                )}
            </Dropdown.Toggle>

            <Dropdown.Menu className=" p-3 animate slideIn">
                <div className="user-info d-flex mt-2 mb-3">
                    <img
                        className="profile m-0"
                        src={user.photoURL}
                        alt="profile-pic"
                    />
                    <div className="d-flex flex-column justify-content-between py-1 align-items-start ms-3">
                        <p className="user_name m-0 lh-1">{userName}</p>
                        {/* <span className="user-email">{user.email}</span> */}
                        <span className="user-email lh-1">View Profile</span>
                    </div>
                </div>
                <hr />
                <Link className="text-decoration-none text-dark d-block py-1">
                    <MdOutlineNotificationsNone /> Notification
                </Link>
                <Link className="text-decoration-none text-dark d-block py-1">
                    <MdOutlineDashboard /> Dashboard
                </Link>
                <Link className="text-decoration-none text-dark d-block py-1">
                    <FiSettings /> Setting
                </Link>
                <hr />
                {/* <div className="btn_container"> */}
                <RippleButton
                    onClick={logOut}
                    className="logOut-btn border-0 w-100 bg-danger text-uppercase mx-auto"
                >
                    <FiLogOut className="me-1" /> Log Out
                </RippleButton>
                {/* </div> */}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default User;
