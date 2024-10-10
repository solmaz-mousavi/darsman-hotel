import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../contexts/ContextData";
import "./header.css";
import Navbar from "../navbar/Navbar";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../images/1.png";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const [showHamMenu, setShowHamMenu] = useState(false);
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const roomLocalStorageData =
    JSON.parse(localStorage.getItem("roomCart")) || [];
  const foodLocalStorageData =
    JSON.parse(localStorage.getItem("foodCart")) || [];
  const [cartLength, setCartLength] = useState(null);
  useEffect(() => {
    setCartLength(roomLocalStorageData.length + foodLocalStorageData.length);
  });

  const ContextDatas = useContext(ContextData);
  const { logout } = ContextDatas;

  return (
    <>
      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="hotel" />
          <p className="hotelName">هتل درســـــــمن</p>
        </Link>
        <div className="stars">
          <FaStar className="star-sm" />
          <FaStar className="star-md" />
          <FaStar className="star-lg" />
          <FaStar className="star-md" />
          <FaStar className="star-sm" />
        </div>
      </div>
      <header className="header-wrapper">
        <div className="container header-container">
          <MdMenu
            className="hamMenu-icon"
            onClick={() => setShowHamMenu((prev) => !prev)}
          />
          <div className={`${showHamMenu ? "showMenu" : "hideMenu"}`}>
            <Navbar setShowHamMenu={setShowHamMenu} />
          </div>
          <div className="header-left">
            {localStorageData ? (
              <div className="userInfo-container">
                <Link to="/userPanel/userInfo">
                  {localStorageData.profile === "" ? (
                    <FaUserCircle className="header-profile" />
                  ) : (
                    <img
                      src={localStorageData.profile}
                      alt="profile"
                      className="header-profile"
                    />
                  )}
                </Link>

                <div className="username-container">
                  <Link to="/userPanel/userInfo">{localStorageData.name}</Link>
                  <p className="username-role">
                    {localStorageData.role === "admin" ? "مدیر سایت" : "کاربر"}
                  </p>
                </div>
                <MdLogout
                  onClick={() => logout()}
                  className="icon icon-btn logout-icon"
                />
              </div>
            ) : (
              <Link to="/login" className="btn btn-submit login-btn">
                ثبت نام | ورود
              </Link>
            )}

            <Link to="/cart" className="cart-btn">
              <FaCartShopping className="icon icon-btn cart-icon" />
              <div className="cart-branch">{cartLength}</div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
