import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar({setShowHamMenu}) {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <ul className="navbar-container">
        <li className="navbar-item" >
          <NavLink
            to="./"
            className={(link) => (link.isActive ? "active" : "")}
						onClick={()=> setShowHamMenu(false)}
          >
            صفحه اصلی
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="./roomSearch"
            className={(link) => (link.isActive ? "active" : "")}
						onClick={()=> setShowHamMenu(false)}
          >
            رزرو اتاق
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="./foodSearch"
            className={(link) => (link.isActive ? "active" : "")}
						onClick={()=> setShowHamMenu(false)}
          >
            سفارش غذا
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="./userPanel/userInfo"
            className={(link) => (link.isActive ? "active" : "")}
						onClick={()=> setShowHamMenu(false)}
          >
            پنل کاربری
          </NavLink>
        </li>
        {localStorageData?.role === "admin" ? (
          <li className="navbar-item">
            <NavLink
              to="./adminPanel/rooms"
              className={(link) => (link.isActive ? "active" : "")}
						onClick={()=> setShowHamMenu(false)}
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
