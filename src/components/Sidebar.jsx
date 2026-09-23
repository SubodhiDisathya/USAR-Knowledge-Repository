import React from "react";
import { NavLink } from "react-router-dom";
import { 
  Users, 
  CloudRain, 
  LayoutDashboard,
  LogOut,
  ClipboardList,
  ShieldCheck 
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import "./Sidebar.css";

export default function Sidebar() {
  const { logout } = useAuth();
  const { locale } = useLocale();
  const t = translations[locale] || translations["en"];

  return (
    <aside className="sidebar">
      <div className="sidebar-header"><h1>USAR</h1></div>

      <div className="sidebar-nav">
        
        <NavLink to="/Dashboard" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
          <LayoutDashboard size={20} />
          <span>{t.Dashboard || "Dashboard"}</span>
        </NavLink>

        <NavLink to="/experiences" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
          <Users size={20} />
          <span>{t.experiencesStories || "Past Experiences & Stories"}</span>
        </NavLink>

        {/* Rainfall Monitoring */}
        <a href="#loading" onClick={(e) => { e.preventDefault(); alert("Rainfall Monitoring feature coming soon!"); }} className="nav-item" style={{ cursor: "pointer" }}>
          <CloudRain size={20} />
          <span>{t.rainfallMonitoring || "View automated Rainfall Monitoring"}</span>
        </a>

        {/* After the Rescue Form */}
        <NavLink to="/after-rescue" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
          <ClipboardList size={20} />
          <span>{t.afterRescueForm || "After the Rescue Form"}</span>
        </NavLink>

        {/* Admin Feature */}
        <NavLink to="/admin" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
          <ShieldCheck size={20} />
          <span>Admin</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <button
          onClick={logout}
          className="logout-btn"
        >
          <LogOut className="w-5 h-5" />
          <span>{t.logout || "Logout"}</span>
        </button>
      </div>
    </aside>
  );
}