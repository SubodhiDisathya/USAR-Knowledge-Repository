import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import ExperienceCard from "../components/ExperienceCard";
import PageBackButton from "../components/PageBackButton";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import { Filter } from "lucide-react";
import { fieldExperiences } from "../data/experienceData";
import "./Experiences.css";

export default function Experiences() {
  const { locale } = useLocale();
  const t = translations[locale] || translations.en;
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
          <PageBackButton />
          <div className="experiences-header">
            <h2>{t.experienceHeading}</h2>
            <p>{t.experienceDescription}</p>
          </div>

          <div className="filter-bar">
            <div className="search-section">
              <input
                type="text"
                placeholder={t.experienceSearch}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="filter-search"
              />
            </div>

            <div className="filter-section">
              <button className="filter-btn">
                <Filter size={18} />
                {t.filter}
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
              {t.noExperienceRecords}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}