import React from "react";
import "./adminPanelSidebar.css";
import { NavLink } from "react-router-dom";

export default function AdminPanelSidebar() {
  return (
    <div className="admin-panel__navbar-container">
      <ul>
        <li className="admin-panel__navbar-item">
          <NavLink
            to="users"
            className={(link) => (link.isActive ? "active" : "")}
          >
            کاربران
          </NavLink>
        </li>

        <li className="admin-panel__navbar-item">
          <NavLink
            to="rooms"
            className={(link) => (link.isActive ? "active" : "")}
          >
            اتاقها
          </NavLink>
        </li>

        <li className="admin-panel__navbar-item">
          <NavLink
            to="roomReservations"
            className={(link) => (link.isActive ? "active" : "")}
          >
            سفارشات اتاق
          </NavLink>
        </li>

        <li className="admin-panel__navbar-item">
          <NavLink
            to="foods"
            className={(link) => (link.isActive ? "active" : "")}
          >
            غذاها
          </NavLink>
        </li>

        <li className="admin-panel__navbar-item">
          <NavLink
            to="foodReservations"
            className={(link) => (link.isActive ? "active" : "")}
          >
            سفارشات غذا
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
