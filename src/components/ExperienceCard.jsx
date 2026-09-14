import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {
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
            <img src={experience.image} alt={experience.responder} className="avatar-img" />
          ) : (
            <span className="avatar-letter">{firstLetter}</span>
          )}
        </div>
        <div className="header-text">
          <h3>{experience.title}</h3>
          <p className="officer-name">{experience.responder}</p>
        </div>
      </div>
      
      <div className="card-body">
        <p className="org-name">{experience.organization}</p>
        <p className="service-years">{experience.year}</p>
        <p className="snippet">{experience.snippet}</p>
      </div>

      <div className="card-footer">
        <span className="type-badge">{experience.type}</span>
        <a href="#" className="read-more">
          Read More →
        </a>
      </div>
    </div>
  );
}