import React, { useState } from "react";
import { useLocale } from "../context/LocaleContext";
import { useTheme } from "../context/useTheme";
import translations from "../i18n/translations";
import { Search, Globe, Moon, Sun } from "lucide-react";
import "./TopHeader.css";

export default function TopHeader() {
  const { locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const t = translations[locale];
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="top-header">
      <div className="header-left">
        <div className="system-status">
          <span className="status-dot"></span>
          <span>
            {locale === "si" ? "INSARAG දැනුම් පදනම් ගබඩාව" : "INSARAG Knowledge-Based Repository"}
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
            aria-label={t.searchAll}
          />
        </div>
      </div>

      <div className="header-right">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          type="button"
          aria-pressed={theme === "light"}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button onClick={toggleLocale} className="lang-toggle">
          <Globe size={18} />
          <span>{locale === "en" ? "EN" : "සිංහල"}</span>
        </button>
      </div>
    </header>
  );
}