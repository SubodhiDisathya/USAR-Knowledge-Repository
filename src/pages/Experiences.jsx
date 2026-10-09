import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import ExperienceCard from "../components/ExperienceCard";
import { useLocale } from "../context/LocaleContext";
import { Filter } from "lucide-react";
import { fieldExperiences } from "../data/experienceData";
import "./Experiences.css";

export default function Experiences() {
  const { locale } = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filtered = fieldExperiences.filter(
    (exp) =>
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.responder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (id) => {
    // මෙතැනින් View Stories පිටුවට අදාළ ID එක සමඟ redirect කරයි
    navigate(`/view-story/${id}`);
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="experiences-main">
          <div className="experiences-header">
            <h2>{locale === "si" ? "මෙහෙයුම් අත්දැකීම් සහ නිලධාරීන්" : "Operational Experience & Officers"}</h2>
            <p>{locale === "si" ? "ප්‍රවීණ නිලධාරීන්ගේ සේවා වාර්තා සහ ක්ෂේත්‍ර විශේෂඥතාව" : "Service records and field expertise from veteran officers"}</p>
          </div>

          <div className="filter-bar">
            <div className="search-section">
              <input
                type="text"
                placeholder={locale === "si" ? "නිලධාරියාගේ නම, තනතුර හෝ ඒකකය මඟින් සොයන්න..." : "Search by officer name, role or unit..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="filter-search"
              />
            </div>

            <div className="filter-section">
              <button className="filter-btn">
                <Filter size={18} />
                {locale === "si" ? "පෙරහන් කරන්න" : "Filter"}
              </button>
            </div>
          </div>

          <div className="experiences-grid">
            {filtered.map((exp) => (
              <div 
                key={exp.id} 
                onClick={() => handleCardClick(exp.id)} 
                style={{ cursor: "pointer" }}
              >
                <ExperienceCard experience={exp} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              {locale === "si" ? "ගැලපෙන නිලධාරී වාර්තා කිසිවක් හමු නොවීය." : "No matching officer records found."}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}