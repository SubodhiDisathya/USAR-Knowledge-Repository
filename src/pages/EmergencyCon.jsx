import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import PageBackButton from "../components/PageBackButton";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";

export const emergencySummary = {
  totalContacts: 593,
  navy: 142,
  army: 186,
  fire: 98,
  disasterMgmt: 167
};

export const emergencyContacts = [
  {
    id: 1,
    name: "HNS Perera RWP USP psc",
    rank: "Commander (SSD)",
    role: "Instructor",
    organization: "Sri Lanka Navy",
    unitLocation: "NHQ",
    phone: "0777564795"
  },
  {
    id: 2,
    name: "LS (DS) Pradeep Kumara",
    rank: "Leading Seaman",
    role: "USAR Instructor",
    organization: "Sri Lanka Navy",
    unitLocation: "RABS HQ",
    phone: "0712345678"
  },
  {
    id: 3,
    name: "WO1 Chandana Rathnayake",
    rank: "Warrant Officer I",
    role: "Training Officer",
    organization: "Sri Lanka Army",
    unitLocation: "Corps of Engineers",
    phone: "0723456789"
  },
  {
    id: 4,
    name: "Sgt Nishantha Bandara",
    rank: "Sergeant",
    role: "USAR Team Leader",
    organization: "Sri Lanka Army",
    unitLocation: "USAR Unit Colombo",
    phone: "0734567890"
  },
  {
    id: 5,
    name: "PAC Ranjan Kumara",
    rank: "Station Officer",
    role: "Rescue Coordinator",
    organization: "Fire & Rescue Services",
    unitLocation: "Wellawatte Station",
    phone: "0745678901"
  },
  {
    id: 6,
    name: "PK Pathmasiri",
    rank: "Training Officer",
    role: "Fire Training Instructor",
    organization: "Fire & Rescue Services",
    unitLocation: "Colombo HQ",
    phone: "0756789012"
  },
  {
    id: 7,
    name: "TLSS Nandasiri",
    rank: "Asst. Chief Fire Officer",
    role: "Senior Operations Officer",
    organization: "Fire & Rescue Services",
    unitLocation: "ACFO Office",
    phone: "0767890123"
  },
  {
    id: 8,
    name: "WVDA Sunimal",
    rank: "Section Officer",
    role: "Disaster Coordinator",
    organization: "Disaster Management Centre",
    unitLocation: "Kandy Regional Office",
    phone: "0778901234"
  },
  {
    id: 9,
    name: "AADR Rukmal",
    rank: "Senior Instructor",
    role: "Fire Fighter / Instructor",
    organization: "Fire & Rescue Services",
    unitLocation: "Training Division",
    phone: "0789012345"
  },
  {
    id: 10,
    name: "Dr. Sampath Jayawardena",
    rank: "Medical Officer",
    role: "Emergency Medical Advisor",
    organization: "Disaster Management Centre",
    unitLocation: "Colombo DMC",
    phone: "0790123456"
  },
  {
    id: 11,
    name: "Flt Lt Ajith Dissanayake",
    rank: "Flight Lieutenant",
    role: "Air Rescue Coordinator",
    organization: "Sri Lanka Air Force",
    unitLocation: "SLAF Katunayake",
    phone: "0711234567"
  },
  {
    id: 12,
    name: "Cpl Rohan Wijesinghe",
    rank: "Corporal",
    role: "USAR Operator",
    organization: "Sri Lanka Army",
    unitLocation: "Galle USAR Unit",
    phone: "0722345678"
  }
];

export default function EmergencyCon() {
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('All Organizations');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const displayText = (value) => {
    if (locale !== "si") return value;
    const translated = {
      "Sri Lanka Navy": "ශ්‍රී ලංකා නාවික හමුදාව",
      "Sri Lanka Army": "ශ්‍රී ලංකා යුද හමුදාව",
      "Sri Lanka Air Force": "ශ්‍රී ලංකා ගුවන් හමුදාව",
      "Fire & Rescue Services": "ගිනි නිවීමේ සහ ගලවාගැනීමේ සේවය",
      "Disaster Management Centre": "ආපදා කළමනාකරණ මධ්‍යස්ථානය",
      "Commander (SSD)": "කමාන්ඩර් (SSD)",
      "Leading Seaman": "ප්‍රධාන නාවිකයා",
      "Warrant Officer I": "වරෙන්තු නිලධාරී I",
      Sergeant: "සාජන්ට්",
      "Station Officer": "ස්ථාන භාර නිලධාරී",
      "Training Officer": "පුහුණු නිලධාරී",
      "Asst. Chief Fire Officer": "සහකාර ප්‍රධාන ගිනි නිලධාරී",
      "Section Officer": "අංශ නිලධාරී",
      "Senior Instructor": "ජ්‍යෙෂ්ඨ උපදේශක",
      "Medical Officer": "වෛද්‍ය නිලධාරී",
      "Flight Lieutenant": "ගුවන් හමුදා ලුතිනන්",
      Corporal: "කෝප්‍රල්",
      Instructor: "උපදේශක",
      "USAR Instructor": "USAR උපදේශක",
      "USAR Team Leader": "USAR කණ්ඩායම් නායක",
      "Rescue Coordinator": "ගලවාගැනීම් සම්බන්ධීකාරක",
      "Fire Training Instructor": "ගිනි නිවීමේ පුහුණු උපදේශක",
      "Senior Operations Officer": "ජ්‍යෙෂ්ඨ මෙහෙයුම් නිලධාරී",
      "Disaster Coordinator": "ආපදා සම්බන්ධීකාරක",
      "Fire Fighter / Instructor": "ගිනි නිවන භට / උපදේශක",
      "Emergency Medical Advisor": "හදිසි වෛද්‍ය උපදේශක",
      "Air Rescue Coordinator": "ගුවන් ගලවාගැනීම් සම්බන්ධීකාරක",
      "USAR Operator": "USAR මෙහෙයුම් සාමාජික",
      NHQ: "නාවික හමුදා මූලස්ථානය",
      "RABS HQ": "RABS මූලස්ථානය",
      "Corps of Engineers": "ඉංජිනේරු බලකාය",
      "USAR Unit Colombo": "කොළඹ USAR ඒකකය",
      "Wellawatte Station": "වැල්ලවත්ත ස්ථානය",
      "Colombo HQ": "කොළඹ මූලස්ථානය",
      "ACFO Office": "සහකාර ප්‍රධාන ගිනි නිලධාරී කාර්යාලය",
      "Kandy Regional Office": "මහනුවර ප්‍රාදේශීය කාර්යාලය",
      "Training Division": "පුහුණු අංශය",
      "Colombo DMC": "කොළඹ ආපදා කළමනාකරණ මධ්‍යස්ථානය",
      "SLAF Katunayake": "කටුනායක ගුවන් හමුදා කඳවුර",
      "Galle USAR Unit": "ගාල්ල USAR ඒකකය"
    };
    return translated[value] || value;
  };

  const filteredContacts = emergencyContacts.filter(contact => {
    const matchesSearch = [
      contact.name,
      contact.rank,
      contact.organization,
      contact.unitLocation,
      contact.role,
      displayText(contact.rank),
      displayText(contact.organization),
      displayText(contact.unitLocation),
      displayText(contact.role)
    ].some((value) => value.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesOrg = selectedOrg === 'All Organizations' || contact.organization.includes(selectedOrg);
    const matchesRole = selectedRole === 'All Roles' || contact.role.toLowerCase().includes(selectedRole.toLowerCase());

    return matchesSearch && matchesOrg && matchesRole;
  });

  const handleQuickFilter = (orgName) => {
    setSelectedOrg(orgName);
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
    <div className="emergency-container">
      <PageBackButton />
      <style>{`
        .emergency-container {
          width: 100%;
          min-height: 100%;
          height: 100%;
          background-color: #0b0f19;
          color: #ffffff;
          padding: 24px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          box-sizing: border-box;
          overflow-y: auto !important;
        }

        /* Header */
        .header-section {
          margin-bottom: 32px;
        }

        .badge {
          background-color: #450a0a;
          color: #f87171;
          font-size: 11px;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid #7f1d1d;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .main-title {
          font-size: 28px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 10px;
          margin-bottom: 6px;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        /* Summary Grid */
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        @media (min-width: 768px) {
          .summary-grid {
            grid-template-columns: repeat(5, 1fr);
          }
          .disaster-col {
            grid-column: span 1 !important;
          }
        }

        .disaster-col {
          grid-column: span 2;
        }

        .summary-card {
          background-color: #131b2e;
          border: 1px solid #1f293d;
          padding: 16px;
          border-radius: 16px;
          text-align: center;
        }

        .summary-card .icon {
          font-size: 24px;
          margin-bottom: 4px;
        }

        .summary-card .number {
          font-size: 22px;
          font-weight: bold;
        }

        .summary-card .label {
          font-size: 12px;
          color: #9ca3af;
        }

        /* Quick Filter Box */
        .quick-filter-box {
          background-color: #131b2e;
          border: 1px solid rgba(127, 29, 29, 0.5);
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 32px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        }

        .quick-filter-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #fb923c;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .quick-filter-desc {
          font-size: 12px;
          color: #9ca3af;
          margin-bottom: 16px;
        }

        .filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .chip-btn {
          background-color: #1a233a;
          color: #e5e7eb;
          border: 1px solid #374151;
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .chip-btn:hover {
          background-color: #24304d;
        }

        .chip-clear-btn {
          background-color: rgba(69, 10, 10, 0.4);
          color: #fca5a5;
          border: 1px solid #7f1d1d;
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .chip-clear-btn:hover {
          background-color: rgba(127, 29, 29, 0.5);
        }

        /* Search & Dropdowns */
        .controls-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .controls-row {
            flex-direction: row;
          }
        }

        .search-box-wrapper {
          position: relative;
          flex: 1;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 14px;
          color: #9ca3af;
        }

        .search-input {
          width: 100%;
          background-color: #131b2e;
          border: 1px solid #1f293d;
          border-radius: 12px;
          padding: 12px 16px 12px 42px;
          font-size: 14px;
          color: #ffffff;
          outline: none;
          box-sizing: border-box;
        }

        .search-input:focus {
          border-color: #4b5563;
        }

        .dropdown-select {
          background-color: #131b2e;
          border: 1px solid #1f293d;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 14px;
          color: #d1d5db;
          outline: none;
          cursor: pointer;
        }

        /* Section Directory Title */
        .directory-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .count-label {
          font-size: 13px;
          color: #9ca3af;
        }

        /* Contact Cards Grid */
        .contacts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          padding-bottom: 40px;
        }

        @media (min-width: 768px) {
          .contacts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .contact-card {
          background-color: #131b2e;
          border: 1px solid rgba(31, 41, 61, 0.8);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.2s;
        }

        .contact-card:hover {
          border-color: #374151;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .card-profile-info {
          display: flex;
          gap: 12px;
        }

        .avatar-sm {
          width: 48px;
          height: 48px;
          background-color: #1f293d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .card-profile-info h3 {
          font-size: 15px;
          font-weight: bold;
          margin: 0 0 2px 0;
        }

        .rank-sm {
          color: #fb923c;
          font-size: 13px;
          font-weight: 500;
          margin: 0 0 2px 0;
        }

        .role-sm {
          color: #9ca3af;
          font-size: 12px;
          margin: 0;
        }

        .star-btn {
          background: none;
          border: none;
          color: #6b7280;
          font-size: 18px;
          cursor: pointer;
        }

        .star-btn:hover {
          color: #facc15;
        }

        .card-meta {
          display: flex;
          gap: 16px;
          font-size: 12px;
          color: #d1d5db;
          margin-bottom: 16px;
        }

        .location-text {
          color: #9ca3af;
        }

        .phone-badge {
          background-color: #1a233a;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.025em;
          color: #e5e7eb;
          margin-bottom: 16px;
        }

        .card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .call-btn {
          background-color: #16a34a;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 13px;
          text-decoration: none;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .call-btn:hover {
          background-color: #15803d;
        }

        .details-btn {
          background-color: #1f293d;
          color: #d1d5db;
          border: none;
          text-align: center;
          padding: 10px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .details-btn:hover {
          background-color: #374151;
        }

        /* Detail View Styles */
        .back-btn {
          background: none;
          border: none;
          color: #9ca3af;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .back-btn:hover {
          color: #ffffff;
        }

        .detail-card {
          max-width: 650px;
          margin: 0 auto;
          background-color: #131b2e;
          border: 1px solid #1f293d;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }

        .detail-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .avatar-box {
          width: 64px;
          height: 64px;
          background-color: #1f293d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .detail-header h2 {
          font-size: 22px;
          font-weight: bold;
          margin: 0 0 4px 0;
        }

        .rank-text {
          color: #fb923c;
          font-weight: 500;
          margin: 0 0 2px 0;
        }

        .role-text {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .detail-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .detail-item {
          background-color: #1a233a;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #1f293d;
        }

        .detail-item .label, .phone-box .label {
          font-size: 11px;
          color: #9ca3af;
          display: block;
          margin-bottom: 4px;
        }

        .detail-item .value {
          font-weight: 600;
          font-size: 14px;
        }

        .phone-box {
          background-color: #1a233a;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #1f293d;
          margin-bottom: 16px;
        }

        .phone-value {
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 0.05em;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .call-btn-large {
          background-color: #16a34a;
          color: #ffffff;
          text-align: center;
          padding: 14px;
          border-radius: 12px;
          font-weight: bold;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .call-btn-large:hover {
          background-color: #15803d;
        }

        .priority-btn {
          background-color: #1f293d;
          color: #d1d5db;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .priority-btn:hover {
          background-color: #374151;
        }
      `}</style>

      {selectedContact ? (
        <div>
          <button 
            onClick={() => setSelectedContact(null)}
            className="back-btn"
          >
            ← {t.backToDirectory}
          </button>

          <div className="detail-card">
            <div className="detail-header">
              <div className="avatar-box">👤</div>
              <div>
                <h2>{selectedContact.name}</h2>
                <p className="rank-text">{displayText(selectedContact.rank)}</p>
                <p className="role-text">{displayText(selectedContact.role)}</p>
              </div>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">🏢 {t.organization}</span>
                <span className="value">{displayText(selectedContact.organization)}</span>
              </div>
              <div className="detail-item">
                <span className="label">📍 {t.unitLocation}</span>
                <span className="value">{displayText(selectedContact.unitLocation)}</span>
              </div>
              <div className="detail-item">
                <span className="label">🎖️ {t.rank}</span>
                <span className="value">{displayText(selectedContact.rank)}</span>
              </div>
              <div className="detail-item">
                <span className="label">👤 {t.role}</span>
                <span className="value">{displayText(selectedContact.role)}</span>
              </div>
            </div>

            <div className="phone-box">
              <span className="label">📞 {t.primaryContact}</span>
              <span className="phone-value">{selectedContact.phone}</span>
            </div>

            <div className="action-buttons">
              <a href={`tel:${selectedContact.phone}`} className="call-btn-large">
                📞 {t.callNow}
              </a>
              <button 
                onClick={() => alert(t.addedPriorityContacts)}
                className="priority-btn"
              >
                ☆ {t.addPriorityContacts}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="header-section">
            <span className="badge">{t.emergencyDirectory}</span>
            <h1 className="main-title">
              <span>📞</span> {t.emergencyContactDirectory}
            </h1>
            <p className="subtitle">
              {t.emergencyDirectoryDescription}
            </p>
          </div>

          {/* Summary Cards */}
          <div className="summary-grid">
            <div className="summary-card">
              <div className="icon">👥</div>
              <div className="number">{emergencySummary.totalContacts}</div>
              <div className="label">{t.totalContacts}</div>
            </div>
            <div className="summary-card">
              <div className="icon">⚓</div>
              <div className="number">{emergencySummary.navy}</div>
              <div className="label">{displayText("Sri Lanka Navy")}</div>
            </div>
            <div className="summary-card">
              <div className="icon">🪖</div>
              <div className="number">{emergencySummary.army}</div>
              <div className="label">{displayText("Sri Lanka Army")}</div>
            </div>
            <div className="summary-card">
              <div className="icon">🚒</div>
              <div className="number">{emergencySummary.fire}</div>
              <div className="label">{t.fireRescue}</div>
            </div>
            <div className="summary-card disaster-col">
              <div className="icon">🚨</div>
              <div className="number">{emergencySummary.disasterMgmt}</div>
              <div className="label">{t.disasterManagement}</div>
            </div>
          </div>

          {/* Quick Emergency Contact Filter Box */}
          <div className="quick-filter-box">
            <div className="quick-filter-title">
              <span>🚨</span> {t.quickEmergencyContact}
            </div>
            <p className="quick-filter-desc">
              {t.quickContactDescription}
            </p>
            <div className="filter-chips">
              <button onClick={() => handleQuickFilter('USAR')} className="chip-btn">🦺 {t.usarRescue}</button>
              <button onClick={() => handleQuickFilter('Fire')} className="chip-btn">🚒 {t.fireRescue}</button>
              <button onClick={() => handleQuickFilter('Medical')} className="chip-btn">🏥 {t.medicalAssistance}</button>
              <button onClick={() => handleQuickFilter('Navy')} className="chip-btn">⚓ {t.navySupport}</button>
              <button onClick={() => handleQuickFilter('Army')} className="chip-btn">🪖 {t.armySupport}</button>
              <button onClick={() => handleQuickFilter('Disaster')} className="chip-btn">🚨 {t.disasterManagementSupport}</button>
              <button onClick={() => handleQuickFilter('Air Force')} className="chip-btn">✈️ {t.airForceSupport}</button>
              <button onClick={() => { setSelectedOrg('All Organizations'); setSelectedRole('All Roles'); setSearchQuery(''); }} className="chip-clear-btn">✕ {t.clearFilter}</button>
            </div>
          </div>

          {/* Search & Dropdowns */}
          <div className="controls-row">
            <div className="search-box-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text"
                placeholder={t.contactSearch}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <select 
              value={selectedOrg}
              onChange={(e) => setSelectedOrg(e.target.value)}
              className="dropdown-select"
            >
              <option value="All Organizations">{t.allOrganizations}</option>
              <option value="Sri Lanka Navy">{displayText("Sri Lanka Navy")}</option>
              <option value="Sri Lanka Army">{displayText("Sri Lanka Army")}</option>
              <option value="Fire & Rescue">{displayText("Fire & Rescue Services")}</option>
              <option value="Disaster Management">{displayText("Disaster Management Centre")}</option>
              <option value="Sri Lanka Air Force">{displayText("Sri Lanka Air Force")}</option>
            </select>
            <select 
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="dropdown-select"
            >
              <option value="All Roles">{t.allRoles}</option>
              <option value="Instructor">{t.instructor}</option>
              <option value="Officer">{t.officer}</option>
              <option value="Coordinator">{t.coordinator}</option>
              <option value="Medical">{t.medical}</option>
            </select>
          </div>

          {/* Contact Directory Section Header */}
          <div className="directory-header-row">
            <h2 className="section-title"><span>👥</span> {t.contactDirectory}</h2>
            <span className="count-label">{filteredContacts.length} {t.shown}</span>
          </div>

          {/* Contact Cards Grid */}
          <div className="contacts-grid">
            {filteredContacts.map(contact => (
              <div key={contact.id} className="contact-card">
                <div>
                  <div className="card-top">
                    <div className="card-profile-info">
                      <div className="avatar-sm">👤</div>
                      <div>
                        <h3>{contact.name}</h3>
                        <p className="rank-sm">{displayText(contact.rank)}</p>
                        <p className="role-sm">{displayText(contact.role)}</p>
                      </div>
                    </div>
                    <button className="star-btn">☆</button>
                  </div>

                  <div className="card-meta">
                    <span>⚓ {displayText(contact.organization)}</span>
                    <span className="location-text">📍 {displayText(contact.unitLocation)}</span>
                  </div>

                  <div className="phone-badge">
                    📞 {contact.phone}
                  </div>
                </div>

                <div className="card-actions">
                  <a href={`tel:${contact.phone}`} className="call-btn" onClick={(e) => e.stopPropagation()}>
                    📞 {t.callNow}
                  </a>
                  <button onClick={() => setSelectedContact(contact)} className="details-btn">
                    👁️ {t.viewDetails}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}