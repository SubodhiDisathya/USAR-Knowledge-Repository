import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import { Search as SearchIcon } from "lucide-react";
import PageBackButton from "../components/PageBackButton";
import "./Search.css";

export default function Search() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [searchQuery, setSearchQuery] = useState("");

  const mockResults = [
    { id: 1, title: { en: "First Aid for Earthquake Victims", si: "භූමිකම්පාවකින් විපතට පත් වූවන් සඳහා ප්‍රථමාධාර" }, category: { en: "First Aid", si: "ප්‍රථමාධාර" }, snippet: { en: "Learn essential first aid techniques for earthquake survivors...", si: "භූමිකම්පාවකින් දිවි ගලවා ගත් අයට ලබාදිය යුතු අත්‍යවශ්‍ය ප්‍රථමාධාර ක්‍රම ඉගෙන ගන්න..." } },
    { id: 2, title: { en: "USAR Operations Manual", si: "USAR මෙහෙයුම් අත්පොත" }, category: { en: "USAR Operations", si: "USAR මෙහෙයුම්" }, snippet: { en: "Comprehensive guide for urban search and rescue operations...", si: "නාගරික සෙවීම් සහ ගලවාගැනීමේ මෙහෙයුම් සඳහා සවිස්තරාත්මක මාර්ගෝපදේශය..." } },
    { id: 3, title: { en: "Incident Command System", si: "සිද්ධි අණදීමේ පද්ධතිය" }, category: { en: "Incident Management", si: "සිද්ධි කළමනාකරණය" }, snippet: { en: "Understanding the ICS framework for disaster management...", si: "ආපදා කළමනාකරණය සඳහා ICS රාමුව තේරුම් ගන්න..." } },
    { id: 4, title: { en: "Safety Protocols in Risky Environments", si: "අවදානම් සහිත පරිසරවල ආරක්ෂක ක්‍රියාමාර්ග" }, category: { en: "Safety & Risk", si: "ආරක්ෂාව සහ අවදානම" }, snippet: { en: "Critical safety measures for responders in hazardous zones...", si: "උපද්‍රව සහිත ප්‍රදේශවල ප්‍රතිචාරකයන් සඳහා අත්‍යවශ්‍ය ආරක්ෂක ක්‍රියාමාර්ග..." } },
    { id: 5, title: { en: "Triage Assessment Guide", si: "රෝගීන් වර්ගීකරණ තක්සේරු මාර්ගෝපදේශය" }, category: { en: "First Aid", si: "ප්‍රථමාධාර" }, snippet: { en: "Systematic approach to patient triage during mass casualty events...", si: "විශාල පිරිසක් විපතට පත්වන සිදුවීම්වලදී රෝගීන් ක්‍රමානුකූලව වර්ගීකරණය කිරීමේ ක්‍රමය..." } },
    { id: 6, title: { en: "Heavy Equipment Operation", si: "බර උපකරණ මෙහෙයුම්" }, category: { en: "USAR Operations", si: "USAR මෙහෙයුම්" }, snippet: { en: "Safe operation of heavy machinery in rescue operations...", si: "ගලවාගැනීමේ මෙහෙයුම්වලදී බර යන්ත්‍රෝපකරණ ආරක්ෂිතව ක්‍රියාත්මක කිරීම..." } }
  ];

  const language = locale === "si" ? "si" : "en";
  const results = mockResults.filter(
    (result) =>
      Object.values(result.title).some((value) => value.toLowerCase().includes(searchQuery.toLowerCase())) ||
      Object.values(result.category).some((value) => value.toLowerCase().includes(searchQuery.toLowerCase())) ||
      Object.values(result.snippet).some((value) => value.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <TopHeader />
        <main className="search-main">
          <PageBackButton />
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
                      <h3>{result.title[language]}</h3>
                      <span className="result-category">{result.category[language]}</span>
                    </div>
                    <p className="result-snippet">{result.snippet[language]}</p>
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
