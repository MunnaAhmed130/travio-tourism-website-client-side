import React from "react";
import { Dropdown } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import UseAuth from "../../Hooks/UseAuth";
import RippleButton from "../Shared/RippleButton/RippleButton";

const user = () => {
    const { user, handleLogOut } = UseAuth();
    let name = user.displayName;
    let userName = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
    );
    // capitalize first letter of each word

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

            <Dropdown.Menu className="animate slideIn">
                <div className="dropdown_item ">
                    <p className="user_name">{userName}</p>
                </div>
                {/* <div className="btn_container"> */}
                <RippleButton
                    onClick={handleLogOut}
                    className="logOut-btn border-0 bg-danger text-uppercase"
                >
                    <FiLogOut className="me-1" /> Log Out
                </RippleButton>
                {/* </div> */}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default user;
