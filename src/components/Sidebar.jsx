import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  ShieldAlert, 
  Stethoscope, 
  Users, 
  PhoneCall, 
  Search, 
  CloudRain, 
  LayoutDashboard,
  LogOut,
  Globe2,
  ClipboardList
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import "./Sidebar.css";

export default function Sidebar() {
  const { logout } = useAuth();
  const { locale } = useLocale();
  const t = translations[locale] || translations["en"];
  const [loadingText, setLoadingText] = useState(false);

  // ඕනෑම විශේෂ බොත්තමක් ක්ලික් කළ විට වෙනත් තැනකට යාම වළකා "Loading..." පමණක් පෙන්වයි
  const handleRestrictedClick = (e) => {
    e.preventDefault();
    setLoadingText(true);
    
    // අවශ්‍ය නම් තත්පර කිහිපයකින් මෙය අහෝසි වන සේ සැකසිය හැක (මෙහිදී දිගටම Loading පෙන්වයි)
  };

  return (
    <>
      {/* බොත්තම් ක්ලික් කළ පසු "Loading..." පමණක් පෙන්වන තිරය */}
      {loadingText && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0b1326",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          color: "#d9bc61",
          fontSize: "20px",
          fontWeight: "600",
          letterSpacing: "1px"
        }}>
          Loading...
        </div>
      )}

      <aside className="sidebar">
        <div className="sidebar-header"><h1>USAR</h1></div>

        <div className="sidebar-nav">
          
          <NavLink to="/knowledge-hub" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
            <LayoutDashboard size={20} />
            <span>{t.knowledgeHub || "Knowledge Hub"}</span>
          </NavLink>

          <NavLink to="/operational-guidelines" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
            <ShieldAlert size={20} />
            <span>{t.operationalGuidelines || "Operational Guidelines & SOPs"}</span>
          </NavLink>

          <NavLink to="/first-aid-medical" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
            <Stethoscope size={20} />
            <span>{t.firstAidMedical || "First Aid & Medical"}</span>
          </NavLink>

          <NavLink to="/experiences" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
            <Users size={20} />
            <span>{t.experiencesStories || "Past Experiences & Stories"}</span>
          </NavLink>
          
          <NavLink to="/emergency-contacts" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
            <PhoneCall size={20} />
            <span>{t.emergencyContacts || "Emergency Contacts"}</span>
          </NavLink>

          {/* Rainfall Monitoring - වෙනත් තැනකට නොයා Loading පමණක් පෙන්වයි */}
          <a href="#loading" onClick={handleRestrictedClick} className="nav-item" style={{ cursor: "pointer" }}>
            <CloudRain size={20} />
            <span>{t.rainfallMonitoring || "View automated Rainfall Monitoring"}</span>
          </a>

          {/* After the Rescue Form - වෙනත් තැනකට නොයා Loading පමණක් පෙන්වයි */}
          <a href="#loading" onClick={handleRestrictedClick} className="nav-item" style={{ cursor: "pointer" }}>
            <ClipboardList size={20} />
            <span>{t.afterRescueForm || "After the Rescue Form"}</span>
          </a>

          {/* Other Resources - වෙනත් තැනකට නොයා Loading පමණක් පෙන්වයි */}
          <a href="#loading" onClick={handleRestrictedClick} className="nav-item" style={{ cursor: "pointer" }}>
            <Globe2 size={20} />
            <span>{t.others || "Other Resources"}</span>
          </a>
           
          <NavLink to="/search" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
            <Search size={20} />
            <span>{t.searchAllKnowledge || "Search All Knowledge"}</span>
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
    </>
  );
}