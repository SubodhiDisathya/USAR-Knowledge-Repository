import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import ExperienceCard from "../components/ExperienceCard";
import { useLocale } from "../context/LocaleContext";
import { Filter } from "lucide-react";
import "./Experiences.css";

import ranjanImg from "../assets/ranjan.png";
import sunimalImg from "../assets/sunimal.jpeg";

export default function Experiences() {
  const { locale } = useLocale();
  const [searchQuery, setSearchQuery] = useState("");

  const realExperiences = [
    {
      id: 1,
      title: "Training Officer In Charge",
      responder: "PAC Ranjan Kumara",
      organization: "Fire & Rescue Training Academy, Wellawatte",
      year: "23 Years Service",
      snippet: "Experienced Training Officer In Charge providing critical leadership, specialized training coordination, and rescue protocols in high-risk urban environments.",
      type: "Training & Operations",
      location: "Wellawatte, Colombo",
      image: ranjanImg
    },
    {
      id: 2,
      title: "Training Operations & Training Officer",
      responder: "PK Pathmasiri",
      organization: "Training Division",
      year: "23 Years Service",
      snippet: "Specialized Training Officer focusing on advanced firefighting techniques, emergency preparedness, and response drills.",
      type: "Fire Safety",
      location: "Colombo"
    },
    {
      id: 3,
      title: "Fire Assistant Chief & Fire Officer",
      responder: "TLSS Nandasiri",
      organization: "Fire Command Unit",
      year: "23 Years Service",
      snippet: "Assistant Chief Fire Officer overseeing major disaster mitigation operations, tactical deployment, and team leadership.",
      type: "Emergency Command",
      location: "Colombo"
    },
    {
      id: 4,
      title: "Sectional Operations Management",
      responder: "WVDA Sunimal",
      organization: "Operations Section",
      year: "23 Years Service",
      snippet: "Section Officer managing ground operations, equipment readiness, and rapid response deployment during crisis situations.",
      type: "Urban Search & Rescue",
      location: "Colombo",
      image: sunimalImg
    },
    {
      id: 5,
      title: "Firefighting & Rescue Training",
      responder: "AADR Rukmal",
      organization: "Fire Training Wing",
      year: "23 Years Service",
      snippet: "Senior Training Instructor in Fire Fighting, dedicated to shaping skilled operational responders and safety protocols.",
      type: "Fire Fighting",
      location: "Colombo"
    }
  ];

  const filtered = realExperiences.filter(
    (exp) =>
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.responder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <ExperienceCard key={exp.id} experience={exp} />
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