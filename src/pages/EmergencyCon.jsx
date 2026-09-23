import React, { useState } from 'react';
import './EmergencyCon.css';

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
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('All Organizations');
  const [selectedRole, setSelectedRole] = useState('All Roles');

  const filteredContacts = emergencyContacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.rank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.unitLocation.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesOrg = selectedOrg === 'All Organizations' || contact.organization.includes(selectedOrg);
    const matchesRole = selectedRole === 'All Roles' || contact.role.toLowerCase().includes(selectedRole.toLowerCase());

    return matchesSearch && matchesOrg && matchesRole;
  });

  const handleQuickFilter = (orgName) => {
    setSelectedOrg(orgName);
  };

  if (selectedContact) {
    return (
      <div className="emergency-container">
        <button 
          onClick={() => setSelectedContact(null)}
          className="back-btn"
        >
          ← Back to Directory
        </button>

        <div className="detail-card">
          <div className="detail-header">
            <div className="avatar-box">👤</div>
            <div>
              <h2>{selectedContact.name}</h2>
              <p className="rank-text">{selectedContact.rank}</p>
              <p className="role-text">{selectedContact.role}</p>
            </div>
          </div>

          <div className="detail-grid">
            <div className="detail-item">
              <span className="label">🏢 Organization</span>
              <span className="value">{selectedContact.organization}</span>
            </div>
            <div className="detail-item">
              <span className="label">📍 Unit / Location</span>
              <span className="value">{selectedContact.unitLocation}</span>
            </div>
            <div className="detail-item">
              <span className="label">🎖️ Rank</span>
              <span className="value">{selectedContact.rank}</span>
            </div>
            <div className="detail-item">
              <span className="label">👤 Role</span>
              <span className="value">{selectedContact.role}</span>
            </div>
          </div>

          <div className="phone-box mb-4">
            <span className="label">📞 Primary Contact</span>
            <span className="phone-value">{selectedContact.phone}</span>
          </div>

          <div className="action-buttons">
            <a href={`tel:${selectedContact.phone}`} className="call-btn-large">
              📞 Call Now
            </a>
            <button 
              onClick={() => alert("Added to Priority Contacts!")}
              className="priority-btn"
            >
              ☆ Add to Priority Contacts
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="emergency-container">
      
      {/* Header */}
      <div className="header-section">
        <span className="badge">Emergency Directory</span>
        <h1 className="main-title">
          <span>📞</span> Emergency Contact Directory
        </h1>
        <p className="subtitle">
          Quickly find and contact emergency response personnel and organizations during rescue and emergency operations.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <div className="icon">👥</div>
          <div className="number">{emergencySummary.totalContacts}</div>
          <div className="label">Total Contacts</div>
        </div>
        <div className="summary-card">
          <div className="icon">⚓</div>
          <div className="number">{emergencySummary.navy}</div>
          <div className="label">Sri Lanka Navy</div>
        </div>
        <div className="summary-card">
          <div className="icon">🪖</div>
          <div className="number">{emergencySummary.army}</div>
          <div className="label">Sri Lanka Army</div>
        </div>
        <div className="summary-card">
          <div className="icon">🚒</div>
          <div className="number">{emergencySummary.fire}</div>
          <div className="label">Fire & Rescue</div>
        </div>
        <div className="summary-card disaster-col">
          <div className="icon">🚨</div>
          <div className="number">{emergencySummary.disasterMgmt}</div>
          <div className="label">Disaster Mgmt</div>
        </div>
      </div>

      {/* Quick Emergency Contact Filter Box */}
      <div className="quick-filter-box">
        <div className="quick-filter-title">
          <span>🚨</span> Quick Emergency Contact
        </div>
        <p className="quick-filter-desc">
          Select the type of emergency support you need to find the right contacts immediately.
        </p>
        <div className="filter-chips">
          <button onClick={() => handleQuickFilter('USAR')} className="chip-btn">🦺 USAR Rescue</button>
          <button onClick={() => handleQuickFilter('Fire')} className="chip-btn">🚒 Fire & Rescue</button>
          <button onClick={() => handleQuickFilter('Medical')} className="chip-btn">🏥 Medical Assistance</button>
          <button onClick={() => handleQuickFilter('Navy')} className="chip-btn">⚓ Navy Support</button>
          <button onClick={() => handleQuickFilter('Army')} className="chip-btn">🪖 Army Support</button>
          <button onClick={() => handleQuickFilter('Disaster')} className="chip-btn">🚨 Disaster Management</button>
          <button onClick={() => handleQuickFilter('Air Force')} className="chip-btn">✈️ Air Force Support</button>
          <button onClick={() => { setSelectedOrg('All Organizations'); setSelectedRole('All Roles'); setSearchQuery(''); }} className="chip-clear-btn">✕ Clear Filter</button>
        </div>
      </div>

      {/* Search & Dropdowns */}
      <div className="controls-row">
        <div className="search-box-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text"
            placeholder="Search by Name, Rank, Organization, Unit or Location..."
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
          <option value="All Organizations">All Organizations</option>
          <option value="Sri Lanka Navy">Sri Lanka Navy</option>
          <option value="Sri Lanka Army">Sri Lanka Army</option>
          <option value="Fire & Rescue">Fire & Rescue Services</option>
          <option value="Disaster Management">Disaster Management Centre</option>
          <option value="Sri Lanka Air Force">Sri Lanka Air Force</option>
        </select>
        <select 
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="dropdown-select"
        >
          <option value="All Roles">All Roles</option>
          <option value="Instructor">Instructor</option>
          <option value="Officer">Officer</option>
          <option value="Coordinator">Coordinator</option>
          <option value="Medical">Medical</option>
        </select>
      </div>

      {/* Contact Directory Section Header */}
      <div className="directory-header-row">
        <h2 className="section-title"><span>👥</span> Contact Directory</h2>
        <span className="count-label">{filteredContacts.length} shown</span>
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
                    <p className="rank-sm">{contact.rank}</p>
                    <p className="role-sm">{contact.role}</p>
                  </div>
                </div>
                <button className="star-btn">☆</button>
              </div>

              <div className="card-meta">
                <span>⚓ {contact.organization}</span>
                <span className="location-text">📍 {contact.unitLocation}</span>
              </div>

              <div className="phone-badge">
                📞 {contact.phone}
              </div>
            </div>

            <div className="card-actions">
              <a href={`tel:${contact.phone}`} className="call-btn">
                📞 Call Now
              </a>
              <button onClick={() => setSelectedContact(contact)} className="details-btn">
                👁️ View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}