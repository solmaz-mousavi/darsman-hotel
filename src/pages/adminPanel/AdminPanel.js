import React from "react";
import "./adminPanel.css";
import AdminPanelSidebar from "../../components/adminPanelSidebar/AdminPanelSidebar";
import { Outlet } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="admin-panel-container">
      <aside className="admin-panel__sidebar-container">
        <AdminPanelSidebar />
      </aside>
      <section className="admin-panel__main-container">
        <Outlet />
      </section>
    </div>
  );
}
