import React from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardList, Users, ShieldCheck, ArrowRight } from "lucide-react";
import "./Admin.css";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import PageBackButton from "../components/PageBackButton";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";

export default function Admin() {
  const navigate = useNavigate();
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <div className="admin-container">
          <PageBackButton />
          <div className="admin-header">
            <div>
              <h1 className="admin-title">{t.adminDashboard}</h1>
              <p className="admin-subtitle">{t.adminDescription}</p>
            </div>
            <span className="admin-badge">{t.administrator}</span>
          </div>

          <div className="admin-grid">
            {/* Rescue Form Details Card */}
            <div className="admin-card" onClick={() => navigate("/admin/rescue-reports")}>
              <div className="card-icon blue">
                <ClipboardList size={24} />
              </div>
              <div className="card-content">
                <h3>{t.rescueFormDetails}</h3>
                <p>{t.viewReviewManage}</p>
              </div>
              <div className="card-action">
                <span>{t.view}</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Success Stories / Experiences Card */}
            <div className="admin-card" onClick={() => navigate("/experiences")}>
              <div className="card-icon green">
                <Users size={24} />
              </div>
              <div className="card-content">
                <h3>{t.successStories}</h3>
                <p>{t.manageStoriesDescription}</p>
              </div>
              <div className="card-action">
                <span>{t.manage}</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* System Control Card - මෙන්න මෙතැන alert එක වෙනුවට navigate එක දෙන ලදී */}
            <div className="admin-card" onClick={() => navigate("/admin/security")}>
              <div className="card-icon purple">
                <ShieldCheck size={24} />
              </div>
              <div className="card-content">
                <h3>{t.systemSecurityRoles}</h3>
                <p>{t.systemSecurityDescription}</p>
              </div>
              <div className="card-action">
                <span>{t.configure}</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}