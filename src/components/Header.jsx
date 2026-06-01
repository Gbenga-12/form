import React from "react";
import "./css/HeaderStyle.css";
import Button from "./Button";
import { IoMenu } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logOut} from "../redux/usersSlice.js";

const Header = () => {
  const user = useSelector(state => state.users.loggedInUser)
  const dispatch = useDispatch();
  // console.log(user);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  }
  return (
    <header className="header_Container">
      <article className="Header_Wrapper">
        <h3>
          Eflex <span>Bank App</span>
        </h3>

        <div className="Header_Wrapper_Right">
          <div className="header_Profile_Holder">
            <div className="Header_Profile">U</div>
            <h5>{user?.fullName}</h5>
          </div>
          <button className="Btn Header_Btn" onClick={logoutHandler}>
            {user?.fullName !== undefined ? "Log out" : "Login"}
          </button>

          <div className="Header_Mobile_Toggle" >
            <IoMenu className="Icon" />
          </div>
        </div>
      </article>
    </header>
  );
};

export default Header;
