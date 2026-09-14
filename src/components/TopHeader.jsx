import React, { useState } from "react";
import { useLocale } from "../context/LocaleContext";
import translations from "../i18n/translations";
import { Search, Globe } from "lucide-react";
import "./TopHeader.css";

export default function TopHeader() {
  const { locale, toggleLocale } = useLocale();
  const t = translations[locale];
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="top-header">
      <div className="header-left">
        <div className="system-status">
          <span className="status-dot"></span>
          <span>
            INSARAG Knowledge Based Repository
          </span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-wrapper">
          <Search size={18} />
          <input
            type="text"
            placeholder={t.searchAll}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <button onClick={toggleLocale} className="lang-toggle">
          <Globe size={18} />
          <span>{locale === "en" ? "EN" : "සිංහල"}</span>
        </button>
      </div>
    </header>
  );
}