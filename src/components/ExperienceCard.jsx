import React from "react";
import { useLocale } from "../context/LocaleContext";
import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {
  const { locale } = useLocale();
  const localized = (field) => locale === "si" ? experience[`${field}Si`] || experience[field] : experience[field];
  const firstLetter = experience.responder ? experience.responder.charAt(0).toUpperCase() : "U";

  const getAvatarColor = (letter) => {
    switch (letter) {
      case "P": return "#ff9800";
      case "T": return "#d4af37";
      case "W": 
      case "A": return "#e91e63";
      default: return "#3f51b5";
    }
  };

  return (
    <div className="experience-card">
      <div className="card-header">
        <div 
          className="avatar"
          style={{ backgroundColor: experience.image ? "transparent" : getAvatarColor(firstLetter) }}
        >
          {experience.image ? (
            <img
              src={experience.image}
              alt={experience.responder}
              className="avatar-img"
              style={{ objectPosition: experience.imagePosition || "center" }}
            />
          ) : (
            <span className="avatar-letter">{firstLetter}</span>
          )}
        </div>
        <div className="header-text">
          <h3>{localized("title")}</h3>
          <p className="officer-name">{locale === "si" ? experience.responderSi || experience.responder : experience.responder}</p>
        </div>
      </div>
      
      <div className="card-body">
        <p className="org-name">{localized("organization")}</p>
        <p className="service-years">{localized("year")}</p>
        <p className="snippet">{localized("snippet")}</p>
      </div>

      <div className="card-footer">
        <span className="type-badge">{localized("type")}</span>
        <a href="#" className="read-more">
          {locale === "si" ? "විස්තර කියවන්න" : "Read More"} →
        </a>
      </div>
    </div>
  );
}