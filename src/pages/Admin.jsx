import React from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardList, Users, ShieldCheck, ArrowRight } from "lucide-react";
import "./Admin.css";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="app-layout">
      <div className="main-content">
        <div className="admin-container">
          <div className="admin-header">
            <div>
              <h1 className="admin-title">Admin Dashboard</h1>
              <p className="admin-subtitle">Manage USAR Repository records, forms, and success stories.</p>
            </div>
            <span className="admin-badge">Administrator</span>
          </div>

          <div className="admin-grid">
            {/* Rescue Form Details Card - මෙන්න මෙතැන "/after-rescue" වෙනුවට "/admin/rescue-reports" ලෙස වෙනස් කරන ලදී */}
            <div className="admin-card" onClick={() => navigate("/admin/rescue-reports")}>
              <div className="card-icon blue">
                <ClipboardList size={24} />
              </div>
              <div className="card-content">
                <h3>Rescue Form Details</h3>
                <p>View, review, and manage submitted After Rescue Reports and mission logs.</p>
              </div>
              <div className="card-action">
                <span>View</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Success Stories / Experiences Card */}
            <div className="admin-card" onClick={() => navigate("/experiences")}>
              <div className="card-icon green">
                <Users size={24} />
              </div>
              <div className="card-content">
                <h3>Success Stories & Experiences</h3>
                <p>Approve, edit, or remove past officer experiences and rescue stories.</p>
              </div>
              <div className="card-action">
                <span>Manage</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* System Control Card */}
            <div className="admin-card" onClick={() => alert("System settings & user permissions module coming soon!")}>
              <div className="card-icon purple">
                <ShieldCheck size={24} />
              </div>
              <div className="card-content">
                <h3>System Security & Roles</h3>
                <p>Configure access levels, permissions, and system audit logs.</p>
              </div>
              <div className="card-action">
                <span>Configure</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}