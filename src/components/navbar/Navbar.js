import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <ul className="navbar-container">
        <li className="navbar-item">
          <NavLink
            to="./"
            className={(link) => (link.isActive ? "active" : "")}
          >
            صفحه اصلی
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="./roomSearch"
            className={(link) => (link.isActive ? "active" : "")}
          >
            رزرو اتاق
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="./foodSearch"
            className={(link) => (link.isActive ? "active" : "")}
          >
            سفارش غذا
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="./userPanel/userInfo"
            className={(link) => (link.isActive ? "active" : "")}
          >
            پنل کاربری
          </NavLink>
        </li>
        {localStorageData?.role === "admin" ? (
          <li className="navbar-item">
            <NavLink
              to="./adminPanel/rooms"
              className={(link) => (link.isActive ? "active" : "")}
            >
              پنل مدیریتی
            </NavLink>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
