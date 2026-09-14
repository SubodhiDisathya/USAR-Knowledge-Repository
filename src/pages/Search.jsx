import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import { Search as SearchIcon } from "lucide-react";
import "./Search.css";

export default function Search() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [searchQuery, setSearchQuery] = useState("");

  const mockResults = [
    { id: 1, title: "First Aid for Earthquake Victims", category: "First Aid", snippet: "Learn essential first aid techniques for earthquake survivors..." },
    { id: 2, title: "USAR Operations Manual", category: "USAR Operations", snippet: "Comprehensive guide for urban search and rescue operations..." },
    { id: 3, title: "Incident Command System", category: "Incident Management", snippet: "Understanding the ICS framework for disaster management..." },
    { id: 4, title: "Safety Protocols in Risky Environments", category: "Safety & Risk", snippet: "Critical safety measures for responders in hazardous zones..." },
    { id: 5, title: "Triage Assessment Guide", category: "First Aid", snippet: "Systematic approach to patient triage during mass casualty events..." },
    { id: 6, title: "Heavy Equipment Operation", category: "USAR Operations", snippet: "Safe operation of heavy machinery in rescue operations..." }
  ];

  const results = mockResults.filter(
    (r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="search-main">
          <div className="search-header">
            <h2>{t.searchAll}</h2>
            <p>{t.searchAcross}</p>
          </div>

          <div className="search-box">
            <SearchIcon size={24} />
            <input
              type="text"
              placeholder={t.enterSearch}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-field"
              autoFocus
            />
          </div>

          <div className="results-section">
            {results.length > 0 && (
              <p className="results-count">
                {t.found} {results.length} {t.results}
              </p>
            )}

            <div className="results-list">
              {results.length === 0 ? (
                <div className="no-results">
                  <p>{t.noItems}</p>
                  <p>{t.tryDifferent}</p>
                </div>
              ) : (
                results.map((result) => (
                  <div key={result.id} className="result-item">
                    <div className="result-header">
                      <h3>{result.title}</h3>
                      <span className="result-category">{result.category}</span>
                    </div>
                    <p className="result-snippet">{result.snippet}</p>
                    <a href="#" className="result-link">
                      {t.viewFull} →
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
